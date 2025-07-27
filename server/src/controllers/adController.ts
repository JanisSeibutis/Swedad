import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getAds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: any = {}

    if (req.query.region) {
      filters.regionId = req.query.region
    }
    if (req.query.category) {
      filters.categoryId = req.query.category
    }
    if (req.query.userId) {
      filters.userId = req.query.userId
    }

    const ads = await prisma.ad.findMany({
      where: filters,
      include: {
        images: true,
        category: { select: { name: true } },
        region: { select: { name: true } },
        user: { select: { username: true } },
      },
    })
    res.json(ads)
  } catch (err) {
    next(err)
  }
}

export const getAdById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    const ad = await prisma.ad.findUnique({
      where: { id },
      include: {
        images: true,
        category: { select: { name: true } },
        region: { select: { name: true } },
        user: { select: { username: true } },
      },
    })
    if (!ad) return res.status(404).json({ error: "Ad not found" })
    res.json(ad)
  } catch (err) {
    next(err)
  }
}

export const createAd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, categoryId, regionId, title, description, price, location } =
    req.body
  try {
    const ad = await prisma.ad.create({
      data: {
        userId,
        categoryId,
        regionId,
        title,
        description,
        price,
        location,
      },
    })
    res.status(201).json(ad)
  } catch (err) {
    next(err)
  }
}

export const updateAd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { title, description, price, location, categoryId, regionId } = req.body
  try {
    const ad = await prisma.ad.update({
      where: { id },
      data: { title, description, price, location, categoryId, regionId },
    })
    res.json(ad)
  } catch (err) {
    next(err)
  }
}

export const deleteAd = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  try {
    await prisma.ad.delete({ where: { id } })
    res.json({ message: "Ad deleted" })
  } catch (err) {
    next(err)
  }
}
