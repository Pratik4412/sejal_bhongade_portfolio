import asyncHandler from "../utils/asyncHandler.js";
import { Project, Article } from "../models/index.js";
import { Service, Experience, Testimonial, Award, Message, Subscriber } from "../models/collections.js";

export const getDashboard = asyncHandler(async (_req, res) => {
  const [
    projects,
    publishedProjects,
    articles,
    services,
    experiences,
    testimonials,
    awards,
    messages,
    unreadMessages,
    subscribers,
    recentMessages,
    recentProjects,
  ] = await Promise.all([
    Project.countDocuments(),
    Project.countDocuments({ status: "published" }),
    Article.countDocuments(),
    Service.countDocuments(),
    Experience.countDocuments(),
    Testimonial.countDocuments(),
    Award.countDocuments(),
    Message.countDocuments(),
    Message.countDocuments({ read: false }),
    Subscriber.countDocuments(),
    Message.find().sort({ createdAt: -1 }).limit(5),
    Project.find().sort({ updatedAt: -1 }).limit(5),
  ]);

  res.json({
    success: true,
    stats: { projects, publishedProjects, articles, services, experiences, testimonials, awards, messages, unreadMessages, subscribers },
    recentMessages,
    recentProjects,
  });
});
