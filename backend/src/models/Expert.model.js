import mongoose from "mongoose";

const expertSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    bio: String,

    availableSlots: [
      {
        date: String,
        slots: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Expert= mongoose.model(
  "Expert",
  expertSchema
);