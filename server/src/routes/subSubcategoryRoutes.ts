import express from "express"
import { body } from "express-validator"
import validate from "../middleware/validate"
import {
  getSubSubcategories,
  getSubSubcategoryById,
  getSubSubcategoriesBySubcategory,
  createSubSubcategory,
  updateSubSubcategory,
  deleteSubSubcategory,
} from "../controllers/subSubcategoryController"

const router = express.Router()

router.get("/", getSubSubcategories)
router.get("/subcategory/:subcategoryId", getSubSubcategoriesBySubcategory)
router.get("/:id", getSubSubcategoryById)
router.post(
  "/",
  [
    body("name").isString().notEmpty(),
    body("subcategoryId").isString().notEmpty(),
    validate,
  ],
  createSubSubcategory
)
router.put(
  "/:id",
  [
    body("name").optional().isString(),
    body("subcategoryId").optional().isString(),
    validate,
  ],
  updateSubSubcategory
)
router.delete("/:id", deleteSubSubcategory)

export default router 