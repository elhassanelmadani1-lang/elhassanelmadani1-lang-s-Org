import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

function apiChatPlugin() {
  return {
    name: 'api-chat-plugin',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        if (req.url && req.url.startsWith('/api/chat') && req.method === 'POST') {
          try {
            let body = '';
            req.on('data', (chunk: any) => {
              body += chunk;
            });
            req.on('end', async () => {
              try {
                const { messages, lang = 'ar' } = JSON.parse(body);
                if (!messages || !Array.isArray(messages)) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'A valid messages array is required.' }));
                  return;
                }

                const apiKey = process.env.GEMINI_API_KEY;
                if (!apiKey) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    reply: lang === 'ar'
                      ? 'مرحباً! يبدو أن مفتاح Gemini API لم يتم إعداده بعد في الخادم. يمكنك سؤالي عن المنتجات مباشرة، وسأكون سعيداً بإجابتك كالأخت سميرة بناءً على المعرفة المحلية!'
                      : lang === 'fr'
                      ? 'Bonjour! Il semble que la clé API Gemini ne soit pas encore configurée sur le serveur. Je reste à votre entière disposition pour répondre à vos questions directement!'
                      : 'Hello! It looks like the Gemini API Key is not configured on the server yet. Please continue exploring our organic catalog, and we will be happy to help!'
                  }));
                  return;
                }

                const ai = new GoogleGenAI({
                  apiKey,
                  httpOptions: {
                    headers: {
                      'User-Agent': 'aistudio-build-samira',
                    },
                  },
                });

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

                const promptContents = messages.map((m: any) => ({
                  role: m.role === 'user' ? 'user' : 'model',
                  parts: [{ text: m.content }],
                }));

                const response = await ai.models.generateContent({
                  model: 'gemini-3.5-flash',
                  contents: promptContents,
                  config: {
                    systemInstruction: systemPrompt,
                  },
                });

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ reply: response.text || "I'm listening. How can I help you today?" }));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'An error occurred during wellness consultation.' }));
              }
            });
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Failed to process request' }));
          }
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/', // <-- هذا السطر هو الذي يمنع الـ 404 والصفحة البيضاء عند الدخول للروابط الفرعية مباشرة
    plugins: [react(), tailwindcss(), apiChatPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
