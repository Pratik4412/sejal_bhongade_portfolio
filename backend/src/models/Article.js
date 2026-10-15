import mongoose from "mongoose";
import { imageField } from "./imageSchema.js";
import { toSlug, uniqueSlug } from "../utils/slug.js";

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"], trim: true, maxlength: 150 },
    slug: { type: String, unique: true, index: true, trim: true },
    category: { type: String, trim: true, default: "Design" },
    excerpt: { type: String, trim: true, maxlength: 300, default: "" },
    content: { type: String, default: "" }, // Markdown. Sanitize when rendering on the website.
    image: imageField,
    status: { type: String, enum: ["draft", "published"], default: "draft", index: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

articleSchema.pre("validate", async function setSlug() {
  if (!this.slug) {
    this.slug = await uniqueSlug(this.constructor, this.title, this._id);
  } else if (this.isModified("slug")) {
    this.slug = toSlug(this.slug);
  }
});

articleSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model("Article", articleSchema);
