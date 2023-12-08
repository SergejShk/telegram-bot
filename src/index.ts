import TelegramBot, { ChatId } from "node-telegram-bot-api";
import dotenv from "dotenv";

import {
  citiesKeyboard,
  intervalKeyboard,
  mainKeyboard,
} from "./utils/keyboards";

dotenv.config();

const botToken = process.env.TL_BOT_TOKEN || "";

const bot = new TelegramBot(botToken, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: "weather", description: "Weather" },
    { command: "currency", description: "Currency" },
  ]);

  const mainMenuCase = (chatId: ChatId) => {
    bot.sendMessage(chatId, "Please choose the option", {
      reply_markup: mainKeyboard,
    });
  };

  const weatherCase = (chatId: ChatId) => {
    bot.sendMessage(chatId, "Please select the city", {
      reply_markup: citiesKeyboard,
    });
  };

  const cityCase = (chatId: ChatId) => {
    bot.sendMessage(chatId, "Please select an interval", {
      reply_markup: intervalKeyboard,
    });
  };

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
      case "/start":
        return bot.sendMessage(
          msg.chat.id,
          "Welcome!\nPlease choose the option",
          {
            reply_markup: mainKeyboard,
          }
        );

      case "/weather":
        return weatherCase(chatId);

      case "/currency":
        return bot.sendMessage(chatId, "Selected currency", {
          reply_markup: mainKeyboard,
        });

      default:
        return bot.sendMessage(
          chatId,
          "The command is not found.\nPlease try again"
        );
    }
  });

  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message?.chat.id || 0;

    switch (data) {
      case "to_main_menu":
        return mainMenuCase(chatId);

      case "weather":
        return weatherCase(chatId);

      case "currency":
        return bot.sendMessage(chatId, "Selected currency", {
          reply_markup: mainKeyboard,
        });

      case "dnipro":
        return cityCase(chatId);

      case "valencia":
        return cityCase(chatId);

      default:
        return bot.sendMessage(
          chatId,
          "The command is not found.\nPlease try again"
        );
    }
  });
};

start();
