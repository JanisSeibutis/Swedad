import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || "our-super-secret-key"

export const register = async (req: Request, res: Response) => {
  const { username, password, name, lastname, email, phone } = req.body
  console.log("Register → Incoming body:", req.body)

  try {
    const existingUser = await prisma.user.findUnique({
      where: { username },
    })

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        name,
        lastname,
        email,
        phone,
      },
    })

    console.log(`Register → New user created: ${username}`)
    res.status(201).json({ message: "User registered", user })
  } catch (err) {
    console.error("Register → Error:", err)
    const message = err instanceof Error ? err.message : String(err)
    res.status(500).json({ error: message || "Internal server error" })
  }
}

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body
  console.log("Login → Incoming body:", req.body)

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    })

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" })
    }

    const token = jwt.sign(
      { userId: user.id, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: "1h" }
    )

    await prisma.userToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1h
      },
    })

    console.log(`Login → Successful for user: ${username}`)
    res.json({ message: "Login successful", token, is_admin: user.isAdmin })
  } catch (err) {
    console.error("Login → Error:", err)
    const message = err instanceof Error ? err.message : String(err)
    res.status(500).json({ error: message || "Internal server error" })
  }
}

export const logout = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1]

  if (!token) {
    return res.status(400).json({ error: "No token provided" })
  }

  try {
    await prisma.userToken.delete({ where: { token } })
    console.log("Logout → Token deleted")
    res.json({ message: "Logout successful" })
  } catch (err) {
    console.error("Logout → Error:", err)
    res.status(500).json({ error: "Could not logout" })
  }
}
