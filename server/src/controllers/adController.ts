import { Request, Response } from "express"
import { PrismaClient } from "../generated/prisma"
const prisma = new PrismaClient()

export const getAds = async (req: Request, res: Response) => {
  try {
    const ads = await prisma.ad.findMany({ include: { images: true, category: true, region: true, user: true } })
    res.json(ads)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ads" })
  }
}

export const getAdById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const ad = await prisma.ad.findUnique({ where: { id }, include: { images: true, category: true, region: true, user: true } })
    if (!ad) return res.status(404).json({ error: "Ad not found" })
    res.json(ad)
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ad" })
  }
}

export const createAd = async (req: Request, res: Response) => {
  const { userId, categoryId, regionId, title, description, price, location } = req.body
  try {
    const ad = await prisma.ad.create({
      data: { userId, categoryId, regionId, title, description, price, location },
    })
    res.status(201).json(ad)
  } catch (err) {
    res.status(500).json({ error: "Failed to create ad" })
  }
}

export const updateAd = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, description, price, location, categoryId, regionId } = req.body
  try {
    const ad = await prisma.ad.update({
      where: { id },
      data: { title, description, price, location, categoryId, regionId },
    })
    res.json(ad)
  } catch (err) {
    res.status(500).json({ error: "Failed to update ad" })
  }
}

export const deleteAd = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await prisma.ad.delete({ where: { id } })
    res.json({ message: "Ad deleted" })
  } catch (err) {
    res.status(500).json({ error: "Failed to delete ad" })
  }
} 