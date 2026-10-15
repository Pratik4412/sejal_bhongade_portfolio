import { Router } from "express";
import { login, logout, me, changePassword } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import { loginLimiter } from "../middleware/rateLimiters.js";

const router = Router();

router.post("/login", loginLimiter, login);
router.post("/logout", logout);
router.get("/me", protect, me);
router.put("/password", protect, changePassword);

export default router;
