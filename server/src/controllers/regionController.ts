import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getRegions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const regions = await prisma.region.findMany({ include: { ads: true } })
    res.json(regions)
  } catch (err) {
    next(err)
  }
}

export const getRegionById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const region = await prisma.region.findUnique({ where: { id }, include: { ads: true } })
    if (!region) return res.status(404).json({ error: "Region not found" })
    res.json(region)
  } catch (err) {
    next(err)
  }
}

export const createRegion = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body
  try {
    const region = await prisma.region.create({ data: { name } })
    res.status(201).json(region)
  } catch (err) {
    next(err)
  }
}

export const updateRegion = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const region = await prisma.region.update({ where: { id }, data: { name } })
    res.json(region)
  } catch (err) {
    next(err)
  }
}

export const deleteRegion = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    await prisma.region.delete({ where: { id } })
    res.json({ message: "Region deleted" })
  } catch (err) {
    next(err)
  }
} 