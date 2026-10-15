import mongoose from "mongoose";
import { imageField } from "./imageSchema.js";

const { Schema } = mongoose;

const strip = {
  transform: (_doc, ret) => {
    delete ret.__v;
    return ret;
  },
};

const make = (name, definition) => {
  const schema = new Schema(
    { ...definition, order: { type: Number, default: 0, index: true }, isActive: { type: Boolean, default: true } },
    { timestamps: true }
  );
  schema.set("toJSON", strip);
  return mongoose.model(name, schema);
};

const text = (required = false, extra = {}) => ({ type: String, trim: true, ...(required ? { required: [true, "Required"] } : { default: "" }), ...extra });

// "Expertise Solutions" rows
export const Service = make("Service", {
  title: text(true, { maxlength: 100 }),
  description: text(false, { maxlength: 500 }),
});

// "Work Process" cards
export const ProcessStep = make("ProcessStep", {
  title: text(true, { maxlength: 100 }),
  description: text(false, { maxlength: 500 }),
});

// "My Professional Experiences" rows
export const Experience = make("Experience", {
  role: text(true, { maxlength: 100 }),
  company: text(true, { maxlength: 100 }),
  employmentType: text(false, { default: "Full Time" }),
  period: text(false), // free text e.g. "2025 - Present"
  description: text(false, { maxlength: 600 }),
  accentColor: text(false, { default: "#c6f10a" }),
});

// "Tech Stack" tiles (design tools)
export const Tool = make("Tool", {
  name: text(true, { maxlength: 60 }),
  image: imageField,
  accentColor: text(false, { default: "#c6f10a" }),
});

export const Testimonial = make("Testimonial", {
  quote: text(true, { maxlength: 700 }),
  name: text(true, { maxlength: 80 }),
  role: text(false, { maxlength: 100 }),
  image: imageField,
});

// "Awards & Recognitions" (also fits certifications)
export const Award = make("Award", {
  year: text(true, { maxlength: 10 }),
  title: text(true, { maxlength: 120 }),
  description: text(false, { maxlength: 400 }),
});

// ---- Inbox ----
const messageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    subject: { type: String, trim: true, maxlength: 150, default: "" },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 5000 },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);
messageSchema.set("toJSON", strip);
export const Message = mongoose.model("Message", messageSchema);

const subscriberSchema = new Schema(
  { email: { type: String, required: true, unique: true, trim: true, lowercase: true, maxlength: 160 } },
  { timestamps: true }
);
subscriberSchema.set("toJSON", strip);
export const Subscriber = mongoose.model("Subscriber", subscriberSchema);
