import express from "express";
import { generateSocialPost } from "../controllers/socialPostController.js";

const router = express.Router();

router.post("/social-post", generateSocialPost);

export default router;
