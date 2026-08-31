import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import { Resend } from 'resend'
import { confirmationEmailHtmlFunding, SIGNATURE_HTML } from '@/lib/email'

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const NOTIFICATION_FROM = 'info@nexavc.com'
const NOTIFICATION_TO = 'info@nexavc.com'

export async function POST(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 503 })
    }

    const form = await req.formData()

    const firstName = form.get('firstName')?.toString() || ''
    const lastName = form.get('lastName')?.toString() || ''
    const email = form.get('email')?.toString() || ''
    const phone = form.get('phone')?.toString() || ''

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const fields: Record<string, string> = {}
    for (const [key, value] of form.entries()) {
      if (key === 'pitchDeck') continue
      fields[key] = value.toString()
    }

    try {
      await pool.query(
        `CREATE TABLE IF NOT EXISTS form_submissions (
          id bigserial PRIMARY KEY,
          form_name text,
          first_name text,
          last_name text,
          email text,
          phone text,
          message text,
          payload jsonb,
          created_at timestamptz DEFAULT now()
        )`
      )

      await pool.query(
        `INSERT INTO form_submissions (form_name, first_name, last_name, email, phone, message, payload)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        ['funding_application', firstName, lastName, email, phone, fields.businessSummary || null, JSON.stringify(fields)]
      )
    } catch (dbErr: any) {
      // eslint-disable-next-line no-console
      console.error('DB error in /api/funding-application', dbErr)
      if (dbErr?.code === 'ECONNREFUSED') {
        return NextResponse.json({ error: 'Unable to connect to database (ECONNREFUSED)' }, { status: 503 })
      }
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    if (resend) {
      try {
        const rows = Object.entries(fields)
          .map(([key, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;">${key}</td><td style="padding:4px 0;"><strong>${value}</strong></td></tr>`)
          .join('')

        const pitchDeck = form.get('pitchDeck') as File | null
        const attachments = []
        if (pitchDeck && pitchDeck.size > 0) {
          const buffer = Buffer.from(await pitchDeck.arrayBuffer())
          attachments.push({ filename: pitchDeck.name || 'pitch-deck.pdf', content: buffer })
        }

        await resend.emails.send({
          from: NOTIFICATION_FROM,
          to: NOTIFICATION_TO,
          subject: `New funding application: ${firstName} ${lastName}`,
          html: `<table>${rows}</table>${SIGNATURE_HTML}`,
          attachments,
        })
      } catch (emailErr) {
        // eslint-disable-next-line no-console
        console.error('Resend error in /api/funding-application', emailErr)
      }

      try {
        await resend.emails.send({
          from: NOTIFICATION_FROM,
          to: email,
          subject: 'We received your application — Nexa',
          html: confirmationEmailHtmlFunding(firstName),
        })
      } catch (emailErr) {
        // eslint-disable-next-line no-console
        console.error('Resend confirmation error in /api/funding-application', emailErr)
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in /api/funding-application', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
