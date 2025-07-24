import { Request, Response } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({ include: { ads: true } })
    res.json(categories)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch categories" })
  }
}

export const getCategoryById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const category = await prisma.category.findUnique({ where: { id }, include: { ads: true } })
    if (!category) return res.status(404).json({ error: "Category not found" })
    res.json(category)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category" })
  }
}

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body
  try {
    const category = await prisma.category.create({ data: { name } })
    res.status(201).json(category)
  } catch (err) {
    res.status(500).json({ error: "Failed to create category" })
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const category = await prisma.category.update({ where: { id }, data: { name } })
    res.json(category)
  } catch (err) {
    res.status(500).json({ error: "Failed to update category" })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.category.delete({ where: { id } })
    res.json({ message: "Category deleted" })
  } catch (err) {
    res.status(500).json({ error: "Failed to delete category" })
  }
} 