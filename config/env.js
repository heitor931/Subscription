import { config }  from 'dotenv'

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

export const { PORT, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_URI, ARCJET_KEY, ARCJET_ENV, QSTASH_TOKEN, QSTASH_URL, SERVER_URL } = process.env;