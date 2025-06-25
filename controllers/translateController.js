import { generateOpenRouterResponse } from "../utils/openRouterHelper.js";

export const translateText = async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res
      .status(400)
      .json({ error: "Text and targetLanguage are required" });
  }

  try {
    const prompt = `Translate the following text to ${targetLanguage}: "${text}"`;
    const translation = await generateOpenRouterResponse(prompt);

    res.status(200).json({ translation });
  } catch (error) {
    console.error("Translation Error:", error.message);
    res.status(500).json({ error: "Failed to translate the text" });
  }
};
