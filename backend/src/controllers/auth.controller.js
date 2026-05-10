import {User} from "../models/User.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const registerUser = async (
  req,
  res,
  next
) => {
  try {

    const {
      name,
      email,
      password,
    } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message:
          "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      user,
    });

  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req,res,next) => {
  try {

    const {email,password,} = req.body;

    const user =
      await User.findOne({ email });

    if (!user) {

      return res.status(404).json({
        success: false,
        message:
          "User not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message:
          "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
      },
    });

  } catch (error) {
    next(error);
  }
};