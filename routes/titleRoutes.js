import express from "express";
import { generateTitle } from "../controllers/titleController.js";

const router = express.Router();
router.post("/generate", generateTitle);

export default router;
