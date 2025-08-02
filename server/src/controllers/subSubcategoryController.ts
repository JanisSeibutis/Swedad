import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getSubSubcategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subSubcategories = await prisma.subSubcategory.findMany({
      include: { 
        subcategory: { 
          select: { 
            name: true,
            category: { select: { name: true } }
          } 
        } 
      },
    })
    res.json(subSubcategories)
  } catch (err) {
    next(err)
  }
}

export const getSubSubcategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const subSubcategory = await prisma.subSubcategory.findUnique({
      where: { id },
      include: { 
        subcategory: { 
          select: { 
            name: true,
            category: { select: { name: true } }
          } 
        } 
      },
    })
    if (!subSubcategory) return res.status(404).json({ error: "SubSubcategory not found" })
    res.json(subSubcategory)
  } catch (err) {
    next(err)
  }
}

export const getSubSubcategoriesBySubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { subcategoryId } = req.params
  try {
    const subSubcategories = await prisma.subSubcategory.findMany({
      where: { subcategoryId },
      include: { 
        subcategory: { 
          select: { 
            name: true,
            category: { select: { name: true } }
          } 
        } 
      },
    })
    res.json(subSubcategories)
  } catch (err) {
    next(err)
  }
}

export const createSubSubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, subcategoryId } = req.body
  try {
    const subSubcategory = await prisma.subSubcategory.create({
      data: { name, subcategoryId },
      include: { 
        subcategory: { 
          select: { 
            name: true,
            category: { select: { name: true } }
          } 
        } 
      },
    })
    res.status(201).json(subSubcategory)
  } catch (err) {
    next(err)
  }
}

export const updateSubSubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { name, subcategoryId } = req.body
  try {
    const subSubcategory = await prisma.subSubcategory.update({
      where: { id },
      data: { name, subcategoryId },
      include: { 
        subcategory: { 
          select: { 
            name: true,
            category: { select: { name: true } }
          } 
        } 
      },
    })
    res.json(subSubcategory)
  } catch (err) {
    next(err)
  }
}

export const deleteSubSubcategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    await prisma.subSubcategory.delete({ where: { id } })
    res.json({ message: "SubSubcategory deleted" })
  } catch (err) {
    next(err)
  }
} 