const pgp = require('pg-promise')()
const connectionString = process.env.SECRET_HOST || 'postgres://localhost:5432/bookstore'
const db = pgp(connectionString)

module.exports = db
