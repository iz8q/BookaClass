import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: env.get('DB_CONNECTION'),
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        connectionString: env.get('DATABASE_URL'),
        ssl: { rejectUnauthorized: false },
      },
      pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000,
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
