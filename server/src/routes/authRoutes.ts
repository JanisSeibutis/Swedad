import express from "express";
import { body } from "express-validator";
import validate from "../middleware/validate";
import { register, login, logout } from "../controllers/authController";

const router = express.Router();

router.post(
  "/register",
  [
    body("username").isString().notEmpty(),
    body("password").isString().isLength({ min: 6 }),
    body("email").isEmail(),
    body("name").isString().notEmpty(),
    body("lastname").isString().notEmpty(),
    body("phone").isString().notEmpty(),
    validate,
  ],
  register
);

router.post(
  "/login",
  [
    body("username").isString().notEmpty(),
    body("password").isString().notEmpty(),
    validate,
  ],
  login
);

router.post("/logout", logout);

export default router;
