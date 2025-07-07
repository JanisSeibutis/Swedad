import express, { Request, Response } from "express"
import pool from "../db"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"
const prisma = new PrismaClient()

const app = express()
app.use(cors())
const PORT = 3000

app.get("/", (_, res: Response) => {
  res.send("Hello World")
})

const testUser = async () => {
  const users = await prisma.user.findMany()

  await prisma.user.create({
    data: {
      name: "janis",
      email: "janka_laika@testuser.com",
    },
  })
}

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
