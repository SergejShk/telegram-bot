import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";

import WeatherService from "./services/WeatherService";
import CurrencyService from "./services/CurrencyService";

import MainController from "./controllers/MainController";
import Weather from "./controllers/Weather";
import Currency from "./controllers/Currency";

import { validateEnvVariables } from "./utils/envChecker";

const start = () => {
  validateEnvVariables();

  const botToken = process.env.TL_BOT_TOKEN || "";

  const bot = new TelegramBot(botToken, { polling: true });

  const weatherService = new WeatherService();
  const currencyService = new CurrencyService();

  const mainController = new MainController(bot);
  const weather = new Weather(bot, weatherService);
  const currency = new Currency(bot, currencyService);

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
    const text = msg.message?.text || "";

    switch (data) {
      case "to_main_menu":
        return mainController.mainMenuCase(chatId);

      case "weather":
        return weather.weatherCase(chatId);

      case "currency":
        return currency.currencyCase(chatId);

      case "Dnipro":
      case "Valencia":
        return weather.cityCase(chatId, data);

      case "3_hours":
      case "6_hours":
        return weather.hoursCase(chatId, text, data);

      case "stop_and_go_to_main_menu":
        return weather.stopSendWeather(chatId);

      case "USD":
      case "EUR":
        return currency.selectedCurrencyCase(chatId, data);

      default:
        return mainController.defaultCase(chatId);
    }
  });
};

start();
