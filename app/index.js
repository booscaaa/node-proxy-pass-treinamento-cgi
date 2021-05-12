const express = require('express')
const app = express()
const port = 3000

const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'app',
  password: 'root',
  port: 5432,
})

app.get('/', async (req, res) => {
    const query = await pool.query('SELECT name FROM PEOPLE')

    res.send(query.rows)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})