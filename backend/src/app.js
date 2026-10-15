import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import { env } from "./config/env.js";
import AppError from "./utils/AppError.js";
import { apiLimiter } from "./middleware/rateLimiters.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

const app = express();

app.set("trust proxy", 1); // running behind Nginx: needed for correct client IPs (rate limiting)
app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin(origin, cb) {
      // No Origin header = same-origin / curl / server-to-server: allow.
      if (!origin || env.clientOrigins.includes(origin)) return cb(null, true);
      cb(new AppError("Origin not allowed", 403));
    },
    credentials: true,
  })
);
app.use(morgan(env.isProd ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(mongoSanitize()); // strips $ and . operators from user input (NoSQL injection)

app.get("/api/health", (_req, res) => res.json({ success: true, status: "ok", uptime: process.uptime() }));

app.use("/api", apiLimiter);
app.use("/api/public", publicRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
