// server.js — NirogPath Backend API
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Anthropic = require("@anthropic-ai/sdk");
const SYSTEM_PROMPT = require("./prompt");
const { getFacilitiesByPincode } = require("./facilities");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─── Health check ────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ status: "NirogPath API running", version: "1.0.0" });
});

// ─── POST /api/chat ───────────────────────────────────────────────────────────
// Accepts: { messages: [{role, content}], language: "en"|"hi" }
// Returns: { reply: string, triageResult: object|null }
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, language = "en" } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "messages array is required" });
    }

    // Build language instruction
    const langInstruction =
      language === "hi"
        ? "\n\nIMPORTANT: The user prefers Hindi. Respond primarily in Hindi (Devanagari script). Keep medical terms in English but explain them in Hindi."
        : "\n\nRespond in clear, simple English.";

    // Call Claude API
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT + langInstruction,
      messages: messages,
    });

    const rawReply = response.content[0].text;

    // Try to extract JSON triage result if present
    let triageResult = null;
    const jsonMatch = rawReply.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      try {
        triageResult = JSON.parse(jsonMatch[1]);
      } catch (e) {
        console.error("JSON parse error:", e.message);
      }
    }

    // Clean reply — remove raw JSON block from displayed message
    const cleanReply = rawReply.replace(/```json\n[\s\S]*?\n```/, "").trim();

    res.json({
      reply: cleanReply,
      triageResult,
    });
  } catch (error) {
    console.error("Claude API error:", error.message);
    res.status(500).json({
      error: "AI service error",
      message: error.message,
    });
  }
});

// ─── GET /api/facilities/:pincode ─────────────────────────────────────────────
// Returns: { pincode, facilities: [...] }
app.get("/api/facilities/:pincode", (req, res) => {
  const { pincode } = req.params;

  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ error: "Invalid pincode. Must be 6 digits." });
  }

  const facilities = getFacilitiesByPincode(pincode);
  res.json({ pincode, facilities });
});

// ─── POST /api/translate ──────────────────────────────────────────────────────
// Simple translation fallback (Bhashini API can be plugged in here)
// For demo: uses Claude to translate
app.post("/api/translate", async (req, res) => {
  try {
    const { text, targetLang } = req.body;

    const prompt =
      targetLang === "hi"
        ? `Translate this to simple Hindi (Devanagari script). Keep it natural and easy to understand. Only return the translation, nothing else:\n\n${text}`
        : `Translate this Hindi text to simple English. Only return the translation, nothing else:\n\n${text}`;

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 512,
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ translated: response.content[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: "Translation failed", message: error.message });
  }
});

// ─── Demo scenarios endpoint ──────────────────────────────────────────────────
app.get("/api/demo/:scenario", (req, res) => {
  const scenarios = {
    mild_fever: {
      messages: [{ role: "user", content: "I have a mild fever since yesterday" }],
    },
    dengue: {
      messages: [{ role: "user", content: "I have high fever for 3 days, severe headache, pain behind my eyes, and body aches" }],
    },
    chest_pain: {
      messages: [{ role: "user", content: "I am having chest pain and difficulty breathing" }],
    },
  };

  const scenario = scenarios[req.params.scenario];
  if (!scenario) {
    return res.status(404).json({ error: "Scenario not found" });
  }

  res.json(scenario);
});

app.listen(PORT, () => {
  console.log(`✅ NirogPath API running on http://localhost:${PORT}`);
});
