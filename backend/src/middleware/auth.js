import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import Admin from "../models/Admin.js";
import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const COOKIE_NAME = "admin_token";

export const cookieOptions = () => ({
  httpOnly: true,
  secure: env.cookie.secure,
  sameSite: env.cookie.sameSite,
  path: "/",
});

export const signToken = (id) => jwt.sign({ id }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });

export const protect = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization;
  const token = req.cookies?.[COOKIE_NAME] || (header?.startsWith("Bearer ") ? header.slice(7) : null);
  if (!token) throw new AppError("Authentication required", 401);

  let payload;
  try {
    payload = jwt.verify(token, env.jwtSecret);
  } catch {
    throw new AppError("Session expired, please log in again", 401);
  }

  const admin = await Admin.findById(payload.id);
  if (!admin) throw new AppError("Account no longer exists", 401);

  // Tokens issued before the last password change are no longer valid.
  if (admin.passwordChangedAt && payload.iat < Math.floor(admin.passwordChangedAt.getTime() / 1000)) {
    throw new AppError("Password changed, please log in again", 401);
  }

  req.admin = admin;
  next();
});
