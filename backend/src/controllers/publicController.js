import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { Project, Article, SiteContent } from "../models/index.js";
import {
  Service,
  ProcessStep,
  Experience,
  Tool,
  Testimonial,
  Award,
  Message,
  Subscriber,
} from "../models/collections.js";
import { notifyNewMessage } from "../utils/mailer.js";

const active = { isActive: true };
const byOrder = { order: 1, createdAt: -1 };
const published = { status: "published" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Short browser/CDN cache; the admin changes content rarely.
const cache = (res, seconds = 60) => res.set("Cache-Control", `public, max-age=${seconds}`);

export const getSettings = asyncHandler(async (_req, res) => {
  cache(res);
  res.json({ success: true, settings: await SiteContent.getMain() });
});

export const getHome = asyncHandler(async (_req, res) => {
  const [settings, services, projects, testimonials, awards, articles] = await Promise.all([
    SiteContent.getMain(),
    Service.find(active).sort(byOrder),
    Project.find({ ...published, featured: true }).sort(byOrder).limit(6),
    Testimonial.find(active).sort(byOrder),
    Award.find(active).sort(byOrder),
    Article.find(published).sort({ publishedAt: -1 }).select("-content").limit(3),
  ]);
  cache(res);
  res.json({ success: true, settings, services, projects, testimonials, awards, articles });
});

export const getAbout = asyncHandler(async (_req, res) => {
  const [settings, processSteps, tools, experiences, services, testimonials] = await Promise.all([
    SiteContent.getMain(),
    ProcessStep.find(active).sort(byOrder),
    Tool.find(active).sort(byOrder),
    Experience.find(active).sort(byOrder),
    Service.find(active).sort(byOrder),
    Testimonial.find(active).sort(byOrder),
  ]);
  cache(res);
  res.json({ success: true, settings, processSteps, tools, experiences, services, testimonials });
});

export const getProjects = asyncHandler(async (req, res) => {
  const filter = { ...published };
  if (req.query.category) filter.category = String(req.query.category);
  const items = await Project.find(filter).sort(byOrder).select("-overview -challenge -solution -results");
  cache(res);
  res.json({ success: true, items });
});

export const getProject = asyncHandler(async (req, res) => {
  const item = await Project.findOne({ slug: req.params.slug, ...published });
  if (!item) throw new AppError("Project not found", 404);
  cache(res);
  res.json({ success: true, item });
});

export const getArticles = asyncHandler(async (_req, res) => {
  const items = await Article.find(published).sort({ publishedAt: -1 }).select("-content");
  cache(res);
  res.json({ success: true, items });
});

export const getArticle = asyncHandler(async (req, res) => {
  const item = await Article.findOne({ slug: req.params.slug, ...published });
  if (!item) throw new AppError("Article not found", 404);
  cache(res);
  res.json({ success: true, item });
});

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message, website } = req.body;

  // Honeypot: real users never fill the hidden "website" field. Pretend success to bots.
  if (website) return res.status(201).json({ success: true });

  if (!EMAIL_RE.test(String(email || ""))) throw new AppError("Please enter a valid email address", 400);

  const saved = await Message.create({ name, email, subject, message });
  notifyNewMessage(saved); // not awaited on purpose
  res.status(201).json({ success: true, message: "Thanks! Your message has been sent." });
});

export const subscribe = asyncHandler(async (req, res) => {
  const email = String(req.body.email || "").toLowerCase().trim();
  if (!EMAIL_RE.test(email)) throw new AppError("Please enter a valid email address", 400);

  // Idempotent: subscribing twice is not an error and does not reveal who is subscribed.
  await Subscriber.updateOne({ email }, { $setOnInsert: { email } }, { upsert: true });
  res.status(201).json({ success: true, message: "You're subscribed!" });
});
