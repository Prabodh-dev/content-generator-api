import { generateOpenRouterResponse } from "../utils/openRouterHelper.js";

export const generateBlog = async (req, res) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const prompt = `Write a detailed, informative blog post on: "${title}".`;
    const blog = await generateOpenRouterResponse(prompt);
    res.status(200).json({ blog });
  } catch (err) {
    console.error("Blog Error:", err.message);
    res.status(500).json({ error: "Failed to generate blog" });
  }
};
