/**
 * Usage:
 *   npm run seed          creates the first admin + inserts starter content into EMPTY collections
 *   npm run seed:reset    wipes content collections (NOT admins/messages/subscribers) and re-seeds
 */
import mongoose from "mongoose";
import { env } from "../config/env.js";
import { connectDB } from "../config/db.js";
import { Admin, SiteContent, Project, Article } from "../models/index.js";
import { Service, ProcessStep, Experience, Tool, Testimonial, Award } from "../models/collections.js";
import * as content from "./content.js";

const reset = process.argv.includes("--reset");

const seedCollection = async (Model, label, docs) => {
  if (reset) await Model.deleteMany({});
  if ((await Model.countDocuments()) > 0) {
    console.log(`- ${label}: already has data, skipped`);
    return;
  }
  // create() one by one so schema hooks (slug generation) run
  for (const [index, doc] of docs.entries()) {
    // eslint-disable-next-line no-await-in-loop
    await Model.create({ order: index, ...doc });
  }
  console.log(`- ${label}: inserted ${docs.length}`);
};

const run = async () => {
  await connectDB();

  // First admin
  if ((await Admin.countDocuments()) === 0) {
    if (!env.admin.email || !env.admin.password) {
      console.warn("! No admin created: set ADMIN_EMAIL and ADMIN_PASSWORD in .env, then run again.");
    } else {
      await Admin.create({ name: env.admin.name, email: env.admin.email, password: env.admin.password });
      console.log(`- Admin created: ${env.admin.email}`);
    }
  } else {
    console.log("- Admin: already exists, skipped");
  }

  // Singleton site content
  const existing = await SiteContent.findOne({ key: "main" });
  if (!existing || reset) {
    await SiteContent.findOneAndUpdate(
      { key: "main" },
      { $set: content.siteContent },
      { upsert: true, setDefaultsOnInsert: true, runValidators: true }
    );
    console.log("- Site content: written");
  } else {
    console.log("- Site content: already exists, skipped");
  }

  await seedCollection(Service, "Services", content.services);
  await seedCollection(ProcessStep, "Process steps", content.processSteps);
  await seedCollection(Tool, "Tools", content.tools);
  await seedCollection(Experience, "Experiences", content.experiences);
  await seedCollection(Project, "Projects", content.projects);
  await seedCollection(Testimonial, "Testimonials (inactive placeholders)", content.testimonials);
  await seedCollection(Award, "Awards (inactive placeholders)", content.awards);
  await seedCollection(Article, "Articles", content.articles);

  console.log("Done.");
};

run()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exitCode = 1;
  })
  .finally(() => mongoose.connection.close());
