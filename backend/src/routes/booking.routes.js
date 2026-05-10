import express from "express";

import { body } from "express-validator";

import {
  createBooking,
  getBookings,
  updateBookingStatus,
  getAllBookings
} from "../controllers/booking.controller.js";

import validate from "../middlewares/validate.middleware.js";

import {
  protect,
} from "../middlewares/auth.middleware.js";

import {
  authorizeRoles,
} from "../middlewares/role.middleware.js";

const router = express.Router();

router.post(
  "/",

  protect,

  authorizeRoles("user"),

  [
    body("name")
      .notEmpty(),

    body("email")
      .isEmail(),

    body("phone")
      .isLength({ min: 10 }),

    body("date")
      .notEmpty(),

    body("timeSlot")
      .notEmpty(),
  ],

  validate,

  createBooking
);

router.get(
  "/admin/all",

  protect,

  authorizeRoles("admin"),

  getAllBookings
);

router.get(
  "/",

  protect,

  authorizeRoles("user"),

  getBookings
);

router.patch(
  "/:id/status",

  protect,

  authorizeRoles("admin"),

  [
    body("status")
      .isIn([
        "Pending",
        "Confirmed",
        "Completed",
      ]),
  ],

  validate,

  updateBookingStatus
);

export default router;