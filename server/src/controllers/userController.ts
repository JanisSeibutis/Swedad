import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
import bcrypt from "bcrypt"
const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({ include: { ads: true } })
    res.json(users)
  } catch (err) {
    next(err)
  }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const user = await prisma.user.findUnique({ where: { id }, include: { ads: true } })
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password, name, lastname, email, phone, isAdmin } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { username, password: hashedPassword, name, lastname, email, phone, isAdmin } })
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { username, password, name, lastname, email, phone, isAdmin } = req.body
  try {
    let data: any = { username, name, lastname, email, phone, isAdmin }
    if (password) {
      data.password = await bcrypt.hash(password, 10)
    }
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key])
    const user = await prisma.user.update({ where: { id }, data })
    res.json(user)
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    await prisma.user.delete({ where: { id } })
    res.json({ message: "User deleted" })
  } catch (err) {
    next(err)
  }
} 