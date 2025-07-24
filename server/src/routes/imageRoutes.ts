import express from "express"
import { getImages, getImageById, createImage, updateImage, deleteImage } from "../controllers/imageController"

const router = express.Router()

router.get("/", getImages)
router.get("/:id", getImageById)
router.post("/", createImage)
router.put("/:id", updateImage)
router.delete("/:id", deleteImage)

export default router 