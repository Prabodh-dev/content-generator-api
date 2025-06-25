import { generateOpenRouterResponse } from "../utils/openRouterHelper.js";

export const generateSocialPost = async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }

  try {
    const prompt = `Write a short and engaging social media post about: "${topic}". Keep it catchy, useful, and professional.`;
    const post = await generateOpenRouterResponse(prompt);

    res.status(200).json({ post });
  } catch (error) {
    console.error("Social Post Error:", error.message);
    res.status(500).json({ error: "Failed to generate social media post" });
  }
};
