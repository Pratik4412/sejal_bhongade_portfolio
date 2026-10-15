import rateLimit from "express-rate-limit";

const base = { standardHeaders: true, legacyHeaders: false };

export const loginLimiter = rateLimit({
  ...base,
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many login attempts. Try again in 15 minutes." },
});

export const publicWriteLimiter = rateLimit({
  ...base,
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many requests. Please try again later." },
});

export const apiLimiter = rateLimit({
  ...base,
  windowMs: 60 * 1000,
  max: 300,
  message: { success: false, message: "Too many requests." },
});
