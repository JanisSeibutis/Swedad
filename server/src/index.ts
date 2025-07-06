import express, { Request, Response } from "express"
import pool from "../db"
import cors from "cors"

const app = express()
app.use(cors())
const PORT = 3000

app.get("/", (_, res: Response) => {
  res.send("Hello World")
})

app.get("/test", async (_: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM test")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send("Database error")
  }
})

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
