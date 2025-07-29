import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.category.findMany()
    res.json(categories)
  } catch (err) {
    next(err)
  }
}

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: { ads: true },
    })
    if (!category) return res.status(404).json({ error: "Category not found" })
    res.json(category)
  } catch (err) {
    next(err)
  }
}

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body
  try {
    const category = await prisma.category.create({ data: { name } })
    res.status(201).json(category)
  } catch (err) {
    next(err)
  }
}

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const category = await prisma.category.update({
      where: { id },
      data: { name },
    })
    res.json(category)
  } catch (err) {
    next(err)
  }
}

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    await prisma.category.delete({ where: { id } })
    res.json({ message: "Category deleted" })
  } catch (err) {
    next(err)
  }
}
