import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

import MainController from "./controllers/MainController";
import Weather from "./controllers/Weather";
import Currency from "./controllers/Currency";

const start = () => {
  const botToken = process.env.TL_BOT_TOKEN || "";

  const bot = new TelegramBot(botToken, { polling: true });

  const mainController = new MainController(bot);
  const weather = new Weather(bot);
  const currency = new Currency(bot);

  mainController.setCommands();

  bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    switch (text) {
      case "/start":
        return mainController.startCase(chatId);

      case "/weather":
        return weather.weatherCase(chatId);

      case "/currency":
        return currency.currencyCase(chatId);

      default:
        return mainController.defaultCase(chatId);
    }
  });

  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message?.chat.id || 0;

    switch (data) {
      case "to_main_menu":
        return mainController.mainMenuCase(chatId);

      case "weather":
        return weather.weatherCase(chatId);

      case "currency":
        return currency.currencyCase(chatId);

      case "dnipro":
        return weather.cityCase(chatId);

      case "valencia":
        return weather.cityCase(chatId);

      default:
        return mainController.defaultCase(chatId);
    }
  });
};

start();
