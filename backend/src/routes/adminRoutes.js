import { Router } from "express";
import { protect } from "../middleware/auth.js";
import { uploadImage } from "../middleware/upload.js";
import { buildCrudRouter } from "../controllers/crudFactory.js";
import { getDashboard } from "../controllers/dashboardController.js";
import { getSettings, updateSettings } from "../controllers/settingsController.js";
import { uploadSingleImage } from "../controllers/uploadController.js";
import { exportSubscribersCsv } from "../controllers/subscriberExport.js";
import { Project, Article } from "../models/index.js";
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

const router = Router();
router.use(protect); // every route below requires a logged-in admin

router.get("/dashboard", getDashboard);
router.get("/settings", getSettings);
router.put("/settings", updateSettings);
router.post("/upload", uploadImage, uploadSingleImage);
router.get("/subscribers/export", exportSubscribersCsv);

router.use(
  "/projects",
  buildCrudRouter({
    Model: Project,
    label: "Project",
    allowedFields: [
      "title", "slug", "category", "client", "year", "role", "summary", "overview",
      "challenge", "solution", "results", "image", "liveUrl", "caseStudyUrl", "tags",
      "featured", "status", "order",
    ],
    imageFields: ["image"],
    searchFields: ["title", "category", "client"],
  })
);

router.use(
  "/articles",
  buildCrudRouter({
    Model: Article,
    label: "Article",
    allowedFields: ["title", "slug", "category", "excerpt", "content", "image", "status", "publishedAt"],
    imageFields: ["image"],
    searchFields: ["title", "category"],
    sort: { publishedAt: -1 },
    ops: ["list", "get", "create", "update", "remove"],
  })
);

router.use("/services", buildCrudRouter({ Model: Service, label: "Service", allowedFields: ["title", "description", "order", "isActive"] }));
router.use("/process-steps", buildCrudRouter({ Model: ProcessStep, label: "Process step", allowedFields: ["title", "description", "order", "isActive"] }));
router.use(
  "/experiences",
  buildCrudRouter({
    Model: Experience,
    label: "Experience",
    allowedFields: ["role", "company", "employmentType", "period", "description", "accentColor", "order", "isActive"],
  })
);
router.use(
  "/tools",
  buildCrudRouter({ Model: Tool, label: "Tool", allowedFields: ["name", "image", "accentColor", "order", "isActive"], imageFields: ["image"] })
);
router.use(
  "/testimonials",
  buildCrudRouter({
    Model: Testimonial,
    label: "Testimonial",
    allowedFields: ["quote", "name", "role", "image", "order", "isActive"],
    imageFields: ["image"],
  })
);
router.use("/awards", buildCrudRouter({ Model: Award, label: "Award", allowedFields: ["year", "title", "description", "order", "isActive"] }));

router.use(
  "/messages",
  buildCrudRouter({
    Model: Message,
    label: "Message",
    allowedFields: ["read"],
    searchFields: ["name", "email", "subject"],
    sort: { createdAt: -1 },
    ops: ["list", "get", "update", "remove"],
  })
);
router.use(
  "/subscribers",
  buildCrudRouter({
    Model: Subscriber,
    label: "Subscriber",
    allowedFields: [],
    searchFields: ["email"],
    sort: { createdAt: -1 },
    ops: ["list", "remove"],
  })
);

export default router;
