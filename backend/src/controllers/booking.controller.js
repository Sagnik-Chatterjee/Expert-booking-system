import {Booking} from "../models/Booking.model.js";

export const createBooking = async (req,res,next) => {
  try {

    const booking =
      await Booking.create({
        ...req.body,
        user: req.user.id,
      });

    req.io.emit("slotBooked", {
      expertId: booking.expert,
      date: booking.date,
      timeSlot: booking.timeSlot,
    });

    res.status(201).json({
      success: true,
      message:
        "Booking successful",
      booking,
    });

  } catch (error) {

    if (error.code === 11000) {

      return res.status(400).json({
        success: false,
        message:
          "Slot already booked",
      });
    }

    next(error);
  }
};

export const getBookings = async (
  req,
  res,
  next
) => {
  try {

    const { email } = req.query;

    const bookings =
      await Booking.find({
        email,
      }).populate("expert");

    res.json({
      success: true,
      bookings,
    });

  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus =
  async (
    req,
    res,
    next
  ) => {
    try {

      const { status } =
        req.body;

      const booking =
        await Booking.findByIdAndUpdate(
          req.params.id,

          {
            status,
          },

          {
            new: true,
          }
        );

      if (!booking) {

        return res.status(404).json({
          success: false,
          message:
            "Booking not found",
        });
      }

      res.json({
        success: true,
        message:
          "Booking updated",
        booking,
      });

    } catch (error) {
      next(error);
    }
  };

  export const getAllBookings =
  async (
    req,
    res,
    next
  ) => {

    try {

      const bookings =
        await Booking.find()
          .populate("expert")
          .populate("user");

      res.json({
        success: true,
        bookings,
      });

    } catch (error) {

      next(error);
    }
  };