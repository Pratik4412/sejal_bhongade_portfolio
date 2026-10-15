import mongoose from "mongoose";

/** Reusable sub-document for Cloudinary images. `publicId` lets us delete the file later. */
export const imageSchema = new mongoose.Schema(
  {
    url: { type: String, default: "", trim: true },
    publicId: { type: String, default: "", trim: true },
  },
  { _id: false }
);

export const imageField = { type: imageSchema, default: () => ({ url: "", publicId: "" }) };
