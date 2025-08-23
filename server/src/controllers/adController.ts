import { Request, Response, NextFunction } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getAds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultRegionId = process.env.DEFAULT_REGION_ID
  try {
    const filters: any = {}

    if (req.query.region && req.query.region !== defaultRegionId) {
      filters.regionId = req.query.region
    }
    if (req.query.category) {
      filters.categoryId = req.query.category
    }
    if (req.query.subcategory) {
      filters.subcategoryId = req.query.subcategory
    }
    if (req.query.userId) {
      filters.userId = req.query.userId
    }

    const ads = await prisma.ad.findMany({
      where: filters,
      include: {
        images: true,
        category: { select: { name: true } },
        subcategory: { select: { name: true } },
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
        subcategory: { select: { name: true } },
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
  const data = req.body
  data.price = Number(data.price)
  try {
    const ad = await prisma.ad.create({
      data,
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
  const data = req.body
  data.price = Number(data.price)
  try {
    const ad = await prisma.ad.update({
      where: { id },
      data,
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
