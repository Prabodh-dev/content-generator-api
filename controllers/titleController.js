import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const generateTitle = async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: "Topic is required" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct", // free & fast
        messages: [
          {
            role: "user",
            content: `Write a catchy blog title about: ${topic}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const title = response.data.choices[0].message.content;
    res.status(200).json({ title });
  } catch (err) {
    console.error("OpenRouter Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate title" });
  }
};
