import express, { Request, Response } from "express"
import pool from "./config/db"
import cors from "cors"
import { PrismaClient } from "./generated/prisma"
import authRoutes from "./routes/authRoutes"
import adRoutes from "./routes/adRoutes"
import categoryRoutes from "./routes/categoryRoutes"
import subCategoryRoutes from "./routes/subCategoryRoutes"
import imageRoutes from "./routes/imageRoutes"
import regionRoutes from "./routes/regionRoutes"
import userRoutes from "./routes/userRoutes"
import errorHandler from "./middleware/errorHandler"
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
app.use("/category", categoryRoutes)
app.use("/subcategory", subCategoryRoutes)
app.use("/images", imageRoutes)
app.use("/region", regionRoutes)
app.use("/user", userRoutes)
app.use(errorHandler)

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
