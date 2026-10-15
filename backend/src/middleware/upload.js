import multer from "multer";
import AppError from "../utils/AppError.js";

const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

// Full-page screenshots are big: allow up to 20MB. (Cloudinary's free plan caps files at 10MB.)
export const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, cb) => {
    if (!ALLOWED.includes(file.mimetype)) {
      return cb(new AppError("Only JPG, PNG, WEBP, AVIF or GIF images are allowed", 400));
    }
    cb(null, true);
  },
}).single("image");
