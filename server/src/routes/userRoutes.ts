import express from "express"
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/userController"
import { body } from "express-validator"
import validate from "../middleware/validate"

const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUserById)
router.post(
  "/",
  [
    body("username").isString().notEmpty(),
    body("password").isString().isLength({ min: 6 }),
    body("email").isEmail(),
    body("name").isString().notEmpty(),
    body("lastname").isString().notEmpty(),
    body("phone").isString().notEmpty(),
    validate,
  ],
  createUser
)
router.put(
  "/:id",
  [
    body("username").optional().isString(),
    body("password").optional().isString().isLength({ min: 6 }),
    body("email").optional().isEmail(),
    body("name").optional().isString(),
    body("lastname").optional().isString(),
    body("phone").optional().isString(),
    body("isAdmin").optional().isBoolean(),
    validate,
  ],
  updateUser
)
router.delete("/:id", deleteUser)

export default router 