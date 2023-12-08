import TelegramBot, { ChatId } from "node-telegram-bot-api";

import MainController from "./MainController";

import WeatherService from "../services/WeatherService";

import {
  citiesKeyboard,
  intervalKeyboard,
  mainMenuKeyboard,
} from "../utils/keyboards";

class Weather extends MainController {
  weatherService: WeatherService;

  constructor(bot: TelegramBot, weatherService: WeatherService) {
    super(bot);
    this.weatherService = weatherService;
  }

  public weatherCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Please choose the city", {
      reply_markup: citiesKeyboard,
    });
  };

  public cityCase = async (chatId: ChatId, city: string) => {
    this.bot.sendMessage(
      chatId,
      `You have chosen the city of ${city}.\nPlease choose an interval`,
      {
        reply_markup: intervalKeyboard,
      }
    );
  };

  public threeHoursCase = async (chatId: ChatId, text: string) => {
    const splitedText = text.split(".")[0].split(" ");
    const city = splitedText[splitedText.length - 1];

    if (!city) {
      return this.defaultCase(chatId);
    }

    const data = await this.weatherService.getWeatherByCity(city);

    this.bot.sendMessage(
      chatId,
      `City - ${data.name}\nTemperature - ${data.main.temp} C`,
      {
        reply_markup: mainMenuKeyboard,
      }
    );
  };
}

export default Weather;
