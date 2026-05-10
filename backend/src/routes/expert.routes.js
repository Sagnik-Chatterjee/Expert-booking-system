import express from "express";

import {
  createExpert,
  getExpertById,
  getExperts,
} from "../controllers/expert.controller.js";

import {
  protect,
} from "../middlewares/auth.middleware.js";

import {
  authorizeRoles,
} from "../middlewares/role.middleware.js";

const router = express.Router();

router.get("/", getExperts);

router.get("/:id", getExpertById);

router.post(
  "/",

  protect,

  authorizeRoles("admin"),

  createExpert
);

export default router;