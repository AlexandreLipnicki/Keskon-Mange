import express from 'express'
import cors from 'cors'
import { Pool } from 'pg'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// connexion à la base de donnée
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

// écoute le port 3001
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});