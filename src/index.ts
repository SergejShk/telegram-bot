import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const botToken = process.env.TL_BOT_TOKEN || "";

const bot = new TelegramBot(botToken, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Received your message");
});
