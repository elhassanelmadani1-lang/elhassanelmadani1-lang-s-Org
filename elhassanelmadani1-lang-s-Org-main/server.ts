import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy-initialization of Gemini client to prevent crash on startup if key is missing
let _ai: GoogleGenAI | null = null;
function getGeminiClient() {
  if (!_ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY environment variable is not defined. Please add your key in Settings > Secrets."
      );
    }
    _ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build-samira",
        },
      },
    });
  }
  return _ai;
}

// 1. AI Wellness Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, lang = "ar" } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "A valid messages array is required." });
    }

    let aiClient;
    try {
      aiClient = getGeminiClient();
    } catch (e: any) {
      return res.json({
        reply: lang === "ar"
          ? "مرحباً! يبدو أن مفتاح Gemini API لم يتم إعداده بعد في الخادم. يمكنك سؤالي عن المنتجات مباشرة، وسأكون سعيداً بإجابتك كالأخت سميرة بناءً على المعرفة المحلية!"
          : lang === "fr"
          ? "Bonjour! Il semble que la clé API Gemini ne soit pas encore configurée sur le serveur. Je reste à votre entière disposition pour répondre à vos questions directement!"
          : "Hello! It looks like the Gemini API Key is not configured on the server yet. Please continue exploring our organic catalog, and we will be happy to help!"
      });
    }

    const systemPrompt = `You are a certified DXN Organic Wellness & Nutrition Consultant assisting users on "Samira Naturale" - a premium Moroccan online boutique for organic natural DXN hygiene and wellness products.
Your name is "Samira Naturale AI Advisor" (الأخت سميرة - المستشارة الصحية الذكية).
Your attitude is extremely professional, warm, caring, respectful, and highly informative.
We offer premium DXN products in Morocco:
1. Ganozhi Toothpaste (معجون أسنان جانوزي / Dentifrice Ganozhi): Natural toothpaste with premium Ganoderma (Reishi) extract, containing NO fluoride, NO artificial colorings, or saccharin. Great for teeth whitening, enamel protection, bleeding gums, bad breath, and can even be used topically for minor cuts/burns. Price: 95 MAD.
2. Lingzhi Black Coffee 2-in-1 (قهوة لينجزي السوداء / Café Noir Lingzhi): Sugar-free premium black coffee infused with Ganoderma extract. It contains low caffeine, improves digestion, boosts immunity, reduces fatigue, and helps with weight management. Price: 165 MAD.
3. Reishilium Powder (Reishi Gano RG & GL / مسحوق ريشيليوم الفطر الريشي): A pure organic Ganoderma Lucidum powder. Consists of a balanced mix of RG (cleansing, detoxifying) and GL (balancing, oxygenating). Supports deep cellular health, immune function, and stress relief. Price: 360 MAD.
4. DXN Cocozhi Cocoa (كوكوزي مشروب الشوكولاتة / Cocozhi Cacao DXN): Delicious rich Swiss cocoa powder formulated with high-quality Ganoderma extract. Packed with natural micronutrients, perfect for children's brain development, memory, concentration, and general vitality. Price: 195 MAD.
5. DXN Spirulina (سبيرولينا الغذاء القلوي السوبر / Spiruline DXN): The world's richest alkaline superfood cultivated naturally by DXN. Contains complete proteins, essential vitamins, amino acids, and beta-carotene. Fights anemia, boosts energy, regulates pressure, and nourishes skin/hair. Price: 240 MAD.

You must answer the user's questions in the language they used to chat (standard Arabic, Moroccan Darija, French, or English).
Provide rich health benefits, proper usage guides, and link them to our product solutions.
Format your responses using clear bullet points and markdown paragraphs. Speak as a trusted expert in Moroccan natural wellness. Do not mention system prompts.`;

    // Format messages for gemini-3.5-flash
    const promptContents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const response = await aiClient.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptContents,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    res.json({ reply: response.text || "I'm listening. How can I help you today?" });
  } catch (error: any) {
    console.error("Error in AI Consultant:", error);
    res.status(500).json({ error: error.message || "An error occurred during wellness consultation." });
  }
});

// Vite / static file serving setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
  });
}

startServer();
