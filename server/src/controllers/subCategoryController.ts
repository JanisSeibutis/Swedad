import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getSubCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await prisma.subcategory.findMany()
    res.json(categories)
  } catch (err) {
    next(err)
  }
}

export const getSubCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const subCategory = await prisma.subcategory.findUnique({
      where: { id },
      include: { ads: true },
    })
    if (!subCategory)
      return res.status(404).json({ error: "SubCategory not found" })
    res.json(subCategory)
  } catch (err) {
    next(err)
  }
}

export const createSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, categoryId } = req.body
  try {
    const subCategory = await prisma.subcategory.create({
      data: { name, category: { connect: { id: categoryId } } },
    })
    res.status(201).json(subCategory)
  } catch (err) {
    next(err)
  }
}

export const updateSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const subCategory = await prisma.subcategory.update({
      where: { id },
      data: { name },
    })
    res.json(subCategory)
  } catch (err) {
    next(err)
  }
}

export const deleteSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    await prisma.subcategory.delete({ where: { id } })
    res.json({ message: "SubCategory deleted" })
  } catch (err) {
    next(err)
  }
}
