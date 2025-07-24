import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const images = await prisma.image.findMany({ include: { ad: true } })
    res.json(images)
  } catch (err) {
    next(err)
  }
}

export const getImageById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const image = await prisma.image.findUnique({ where: { id }, include: { ad: true } })
    if (!image) return res.status(404).json({ error: "Image not found" })
    res.json(image)
  } catch (err) {
    next(err)
  }
}

export const createImage = async (req: Request, res: Response, next: NextFunction) => {
  const { url, adId } = req.body
  try {
    const image = await prisma.image.create({ data: { url, adId } })
    res.status(201).json(image)
  } catch (err) {
    next(err)
  }
}

export const updateImage = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { url, adId } = req.body
  try {
    const image = await prisma.image.update({ where: { id }, data: { url, adId } })
    res.json(image)
  } catch (err) {
    next(err)
  }
}

export const deleteImage = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    await prisma.image.delete({ where: { id } })
    res.json({ message: "Image deleted" })
  } catch (err) {
    next(err)
  }
}
