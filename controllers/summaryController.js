import { generateOpenRouterResponse } from "../utils/openRouterHelper.js";

export const generateSummary = async (req, res) => {
  const { blog } = req.body;

  if (!blog) return res.status(400).json({ error: "Blog content is required" });

  try {
    const prompt = `Summarize the following blog in a few sentences:\n\n${blog}`;
    const summary = await generateOpenRouterResponse(prompt);
    res.status(200).json({ summary });
  } catch (err) {
    console.error("Summary Error:", err.message);
    res.status(500).json({ error: "Failed to generate summary" });
  }
};
