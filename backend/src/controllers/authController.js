import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { COOKIE_NAME, cookieOptions, signToken } from "../middleware/auth.js";

// Compared against when the email is unknown so response time does not reveal which emails exist.
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 12);

const sendSession = (res, admin, status = 200) => {
  res.cookie(COOKIE_NAME, signToken(admin._id), { ...cookieOptions(), maxAge: 24 * 60 * 60 * 1000 });
  res.status(status).json({ success: true, admin });
};

export const login = asyncHandler(async (req, res) => {
  const email = String(req.body.email || "").toLowerCase().trim();
  const password = String(req.body.password || "");
  if (!email || !password) throw new AppError("Email and password are required", 400);

  const admin = await Admin.findOne({ email }).select("+password");
  const valid = admin ? await admin.comparePassword(password) : await bcrypt.compare(password, DUMMY_HASH);
  if (!admin || !valid) throw new AppError("Invalid email or password", 401);

  sendSession(res, admin);
});

export const logout = (_req, res) => {
  res.clearCookie(COOKIE_NAME, cookieOptions());
  res.json({ success: true });
};

export const me = (req, res) => res.json({ success: true, admin: req.admin });

export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) throw new AppError("Both passwords are required", 400);
  if (String(newPassword).length < 8) throw new AppError("New password must be at least 8 characters", 400);

  const admin = await Admin.findById(req.admin._id).select("+password");
  if (!(await admin.comparePassword(currentPassword))) throw new AppError("Current password is incorrect", 401);

  admin.password = newPassword;
  await admin.save();
  sendSession(res, admin); // issue a fresh token; old ones are now invalid
});
