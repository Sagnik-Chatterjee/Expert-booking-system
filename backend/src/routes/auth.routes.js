import express from "express";

import { body } from "express-validator";

import validate from "../middlewares/validate.middleware.js";

import {
  loginUser,
  registerUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post(
  "/register",

  [
    body("name")
      .notEmpty(),

    body("email")
      .isEmail(),

    body("password")
      .isLength({ min: 6 }),
  ],

  validate,

  registerUser
);

router.post(
  "/login",

  [
    body("email")
      .isEmail(),

    body("password")
      .notEmpty(),
  ],

  validate,

  loginUser
);

export default router;