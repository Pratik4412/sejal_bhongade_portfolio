import mongoose from "mongoose";
import { imageField } from "./imageSchema.js";
import { thumbUrl } from "../config/cloudinary.js";
import { toSlug, uniqueSlug } from "../utils/slug.js";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 120 },
    slug: { type: String, unique: true, index: true, trim: true },
    category: { type: String, trim: true, default: "" }, // e.g. "Mobile App", "Website Redesign"
    client: { type: String, trim: true, default: "" },
    year: { type: String, trim: true, default: "" },
    role: { type: String, trim: true, default: "" },
    summary: { type: String, trim: true, maxlength: 300, default: "" },
    overview: { type: String, trim: true, default: "" },
    challenge: { type: String, trim: true, default: "" },
    solution: { type: String, trim: true, default: "" },
    results: { type: String, trim: true, default: "" },
    image: imageField, // the (tall) full-page screenshot
    liveUrl: { type: String, trim: true, default: "" },
    caseStudyUrl: { type: String, trim: true, default: "" },
    tags: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["draft", "published"], default: "published", index: true },
    order: { type: Number, default: 0, index: true },
  },
  { timestamps: true }
);

projectSchema.pre("validate", async function setSlug() {
  if (!this.slug) {
    this.slug = await uniqueSlug(this.constructor, this.title, this._id);
  } else if (this.isModified("slug")) {
    this.slug = toSlug(this.slug);
  }
});

projectSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.__v;
    // Cropped top-of-page preview for cards; the full `image` is for the viewer modal.
    ret.thumbnail = thumbUrl(ret.image?.url);
    return ret;
  },
});

export default mongoose.model("Project", projectSchema);
