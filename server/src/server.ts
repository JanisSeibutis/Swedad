import express, { Request, Response } from "express"
import pool from "./config/db"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"
import authRoutes from "./routes/authRoutes"
const prisma = new PrismaClient()

const app = express()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
)
const PORT = 3000

app.use(express.json())

app.use("/auth", authRoutes)

app.get("/", (_, res: Response) => {
  res.send("Hello World")
})

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
