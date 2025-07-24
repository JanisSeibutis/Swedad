import { Request, Response } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({ include: { ads: true } })
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const user = await prisma.user.findUnique({ where: { id }, include: { ads: true } })
    if (!user) return res.status(404).json({ error: "User not found" })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { username, password, name, lastname, email, phone, isAdmin } = req.body
  try {
    const user = await prisma.user.create({ data: { username, password, name, lastname, email, phone, isAdmin } })
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params
  const { username, password, name, lastname, email, phone, isAdmin } = req.body
  try {
    const user = await prisma.user.update({ where: { id }, data: { username, password, name, lastname, email, phone, isAdmin } })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.user.delete({ where: { id } })
    res.json({ message: "User deleted" })
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" })
  }
} 