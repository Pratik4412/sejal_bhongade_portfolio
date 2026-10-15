import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { isCloudinaryConfigured, uploadBuffer } from "../config/cloudinary.js";

const FOLDERS = ["projects", "about", "tools", "testimonials", "articles", "misc"];

export const uploadSingleImage = asyncHandler(async (req, res) => {
  if (!isCloudinaryConfigured) throw new AppError("Cloudinary is not configured on the server", 503);
  if (!req.file) throw new AppError("No image file received (field name: image)", 400);

  const folder = FOLDERS.includes(req.body.folder) ? req.body.folder : "misc";
  const image = await uploadBuffer(req.file.buffer, `portfolio/${folder}`);
  res.status(201).json({ success: true, image });
});
