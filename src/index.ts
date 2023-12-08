import express from "express";
import cors from "cors";
import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const botToken = process.env.TL_BOT_TOKEN || "";
const apiUrl = process.env.API_URL || "";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Server is working!");
});

app.post("/bot", (_, res) => {
  //   const { body } = req.body;
  //   bot.processUpdate(body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

const bot = new TelegramBot(botToken, { polling: true });

bot.setWebHook(`${apiUrl}/bot`);

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Received your message");
});
