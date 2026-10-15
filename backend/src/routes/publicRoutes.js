import { Router } from "express";
import * as c from "../controllers/publicController.js";
import { publicWriteLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.get("/settings", c.getSettings);
router.get("/home", c.getHome);
router.get("/about", c.getAbout);
router.get("/projects", c.getProjects);
router.get("/projects/:slug", c.getProject);
router.get("/articles", c.getArticles);
router.get("/articles/:slug", c.getArticle);

router.post("/contact", publicWriteLimiter, c.submitContact);
router.post("/subscribe", publicWriteLimiter, c.subscribe);

export default router;
