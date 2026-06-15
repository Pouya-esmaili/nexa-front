import { NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

type Body = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    // basic validation
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 503 })
    }

    // persist to Postgres
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS contacts (
        id bigserial PRIMARY KEY,
        first_name text NOT NULL,
        last_name text NOT NULL,
        email text NOT NULL,
        phone text,
        message text,
        created_at timestamptz DEFAULT now()
      )`)

      await pool.query(
        `INSERT INTO contacts (first_name, last_name, email, phone, message)
         VALUES ($1, $2, $3, $4, $5)`,
        [body.firstName, body.lastName, body.email, body.phone || null, body.message || null]
      )
    } catch (dbErr: any) {
      // eslint-disable-next-line no-console
      console.error('DB error in /api/contact', dbErr)
      if (dbErr?.code === 'ECONNREFUSED') {
        return NextResponse.json({ error: 'Unable to connect to database (ECONNREFUSED)' }, { status: 503 })
      }
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in /api/contact', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
