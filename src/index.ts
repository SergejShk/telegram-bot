import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const botToken = process.env.TL_BOT_TOKEN || "";
const apiUrl = process.env.API_URL || "";

const bot = new TelegramBot(botToken, {
  webHook: {
    port: PORT,
  },
});

bot.setWebHook(`${apiUrl}/bot${botToken}`);

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Received your message");
});
