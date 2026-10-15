import "dotenv/config";

const required = ["MONGO_URI", "JWT_SECRET"];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const isProd = process.env.NODE_ENV === "production";

if (isProd && process.env.JWT_SECRET.length < 32) {
  console.error("JWT_SECRET must be at least 32 characters in production.");
  process.exit(1);
}

const list = (value, fallback = "") =>
  (value || fallback)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const env = {
  isProd,
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGO_URI,
  clientOrigins: list(process.env.CLIENT_ORIGINS, "http://localhost:3000,http://localhost:5173"),
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
  cookie: {
    sameSite: process.env.COOKIE_SAMESITE || "lax",
    secure: process.env.COOKIE_SECURE ? process.env.COOKIE_SECURE === "true" : isProd,
  },
  admin: {
    name: process.env.ADMIN_NAME || "Portfolio Admin",
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM,
    notifyTo: process.env.CONTACT_NOTIFY_TO,
  },
};
