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

// const testUser = async () => {
//   const users = await prisma.user.findMany()

//   await prisma.user.create({
//     data: {
//       name: "janis",
//       lastname: "laika",
//       username: "jankalaika",
//       email: "janka_laika@testuser.com",
//       phone: "0761482888",
//     },
//   })
// }

// const testRegion = async () => {
//   await prisma.region.create({
//     data: {
//       name: "Gävleborg",
//     },
//   })
// }

// const testCategory = async () => {
//   await prisma.category.create({
//     data: {
//       name: "Strumpor",
//     },
//   })
// }

// const testAd = async (userId, categoryId, regionId) => {
//   await prisma.ad.findMany()

//   await prisma.ad.create({
//     data: {
//       userId,
//       categoryId,
//       regionId,
//       title: "Great product",
//       description: "Description here",
//       price: 100,
//       location: "Stockholm",
//       images: {
//         create: [{ url: "image1.jpg" }, { url: "image2.jpg" }],
//       },
//     },
//   })
// }

// const mainTest = async () => {
//   await testCategory()
//   await testRegion()
//   const user = await prisma.user.findFirst()
//   const category = await prisma.category.findFirst()
//   const region = await prisma.region.findFirst()

//   await testAd(user?.id, category?.id, region?.id)
// }

// mainTest().catch(console.error)

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost: ${PORT}`)
)
