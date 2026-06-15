import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

type Body = {
  formName?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  [key: string]: any
}

export async function POST(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 503 })
    }
    const body: Body = await req.json()

    if (!body.firstName || !body.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // create table if it does not exist
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

      // store as structured fields + full payload
      await pool.query(
        `INSERT INTO form_submissions (form_name, first_name, last_name, email, phone, message, payload)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [body.formName || null, body.firstName || null, body.lastName || null, body.email || null, body.phone || null, body.message || null, JSON.stringify(body)]
      )
    } catch (dbErr: any) {
      // eslint-disable-next-line no-console
      console.error('DB error in /api/forms', dbErr)
      if (dbErr?.code === 'ECONNREFUSED') {
        return NextResponse.json({ error: 'Unable to connect to database (ECONNREFUSED)' }, { status: 503 })
      }
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in /api/forms', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
