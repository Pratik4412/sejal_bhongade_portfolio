import SiteContent from "../models/SiteContent.js";
import asyncHandler from "../utils/asyncHandler.js";
import { deleteImage } from "../config/cloudinary.js";

const EDITABLE = ["siteName", "resumeUrl", "seo", "hero", "marqueeWords", "skillChecks", "about", "sections", "contact", "footer"];

// `sections` is free-form (Mixed), so keep only objects of plain strings.
const cleanSections = (input) => {
  const out = {};
  if (!input || typeof input !== "object") return out;
  for (const [key, value] of Object.entries(input)) {
    if (!value || typeof value !== "object") continue;
    out[key] = {};
    for (const [field, text] of Object.entries(value)) {
      if (typeof text === "string") out[key][field] = text.trim();
    }
  }
  return out;
};

export const getSettings = asyncHandler(async (_req, res) => {
  res.json({ success: true, settings: await SiteContent.getMain() });
});

export const updateSettings = asyncHandler(async (req, res) => {
  const doc = await SiteContent.getMain();
  const oldImages = [doc.about?.image?.publicId, doc.about?.heroBanner?.publicId];

  for (const key of EDITABLE) {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      doc.set(key, key === "sections" ? cleanSections(req.body[key]) : req.body[key]);
    }
  }
  doc.markModified("sections");
  await doc.save();

  const current = [doc.about?.image?.publicId, doc.about?.heroBanner?.publicId];
  oldImages.forEach((id) => {
    if (id && !current.includes(id)) deleteImage(id);
  });

  res.json({ success: true, settings: doc });
});
