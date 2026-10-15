import mongoose from "mongoose";
import { imageField } from "./imageSchema.js";

const { Schema } = mongoose;

const statSchema = new Schema({ value: { type: String, trim: true }, label: { type: String, trim: true } }, { _id: false });
const socialSchema = new Schema(
  { platform: { type: String, trim: true }, url: { type: String, trim: true } },
  { _id: false }
);

/**
 * Singleton document (key = "main") holding every piece of editable site copy
 * that is not a list: hero, about, section headings, contact/footer, SEO.
 */
const siteContentSchema = new Schema(
  {
    key: { type: String, default: "main", unique: true, immutable: true },
    siteName: { type: String, trim: true, default: "Portfolio" },
    resumeUrl: { type: String, trim: true, default: "" },

    seo: {
      title: { type: String, trim: true, maxlength: 70, default: "" },
      description: { type: String, trim: true, maxlength: 170, default: "" },
    },

    hero: {
      greeting: { type: String, trim: true, default: "" },
      titleLine1: { type: String, trim: true, default: "DESIGN" },
      titleLine2: { type: String, trim: true, default: "PARTNER" },
      description: { type: String, trim: true, default: "" },
      ctaLabel: { type: String, trim: true, default: "LET'S TALK" },
    },

    marqueeWords: { type: [String], default: [] },
    skillChecks: { type: [String], default: [] },

    about: {
      label: { type: String, trim: true, default: "About Me" },
      title: { type: String, trim: true, default: "" },
      description: { type: String, trim: true, default: "" },
      email: { type: String, trim: true, lowercase: true, default: "" },
      phone: { type: String, trim: true, default: "" },
      image: imageField,
      heroBanner: imageField,
      stats: { type: [statSchema], default: [] },
    },

    // { services: { label, title }, projectsPage: { label, title, titleLine2 }, ... }
    sections: { type: Schema.Types.Mixed, default: {} },

    contact: {
      heading: { type: String, trim: true, default: "LET'S TALK" },
      email: { type: String, trim: true, lowercase: true, default: "" },
      phone: { type: String, trim: true, default: "" },
      location: { type: String, trim: true, default: "" },
    },

    footer: {
      aboutText: { type: String, trim: true, default: "" },
      copyright: { type: String, trim: true, default: "" },
      socials: { type: [socialSchema], default: [] },
    },
  },
  { timestamps: true }
);

siteContentSchema.statics.getMain = function getMain() {
  return this.findOneAndUpdate({ key: "main" }, {}, { upsert: true, new: true, setDefaultsOnInsert: true });
};

siteContentSchema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.__v;
    delete ret.key;
    return ret;
  },
});

export default mongoose.model("SiteContent", siteContentSchema);
