import {Expert} from "../models/Expert.model.js";

export const createExpert = async (
  req,
  res,
  next
) => {
  try {

    const expert =
      await Expert.create(req.body);

    res.status(201).json({
      success: true,
      expert,
    });

  } catch (error) {
    next(error);
  }
};

export const getExperts = async (
  req,
  res,
  next
) => {
  try {

    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 6;

    const search =
      req.query.search || "";

    const category =
      req.query.category || "";

    const query = {};

    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    if (category) {
      query.category = category;
    }

    const experts =
      await Expert.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

    const total =
      await Expert.countDocuments(
        query
      );

    res.json({
      success: true,
      experts,
      totalPages:
        Math.ceil(total / limit),
      currentPage: page,
    });

  } catch (error) {
    next(error);
  }
};

export const getExpertById = async (
  req,
  res,
  next
) => {
  try {

    const expert =
      await Expert.findById(
        req.params.id
      );

    if (!expert) {

      return res.status(404).json({
        success: false,
        message:
          "Expert not found",
      });
    }

    res.json({
      success: true,
      expert,
    });

  } catch (error) {
    next(error);
  }
};