import express, { Request, Response } from "express"
import pool from "./config/db"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"
import authRoutes from "./routes/authRoutes"
import adRoutes from "./routes/adRoutes"
import categoryRoutes from "./routes/categoryRoutes"
import imageRoutes from "./routes/imageRoutes"
import regionRoutes from "./routes/regionRoutes"
import userRoutes from "./routes/userRoutes"
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
app.use("/ads", adRoutes)
app.use("/categories", categoryRoutes)
app.use("/images", imageRoutes)
app.use("/regions", regionRoutes)
app.use("/users", userRoutes)

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
