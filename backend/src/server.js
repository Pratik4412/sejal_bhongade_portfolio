import mongoose from "mongoose";
import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const start = async () => {
  await connectDB();
  const server = app.listen(env.port, () => console.log(`API running on port ${env.port} (${env.isProd ? "production" : "development"})`));

  const shutdown = async (signal) => {
    console.log(`${signal} received, shutting down...`);
    server.close(async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
};

process.on("unhandledRejection", (err) => console.error("Unhandled rejection:", err));

start().catch((err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});
