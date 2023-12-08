import TelegramBot, { ChatId } from "node-telegram-bot-api";

import MainController from "./MainController";

import WeatherService from "../services/WeatherService";

import {
  stopAndGoToMainMenuKeyboard,
  citiesKeyboard,
  intervalKeyboard,
} from "../utils/keyboards";

class Weather extends MainController {
  weatherService: WeatherService;
  weatherInterval: NodeJS.Timeout | undefined;

  constructor(bot: TelegramBot, weatherService: WeatherService) {
    super(bot);
    this.weatherService = weatherService;
    this.weatherInterval = undefined;
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

  public hoursCase = async (chatId: ChatId, text: string, data: string) => {
    const splitedText = text.split(".")[0].split(" ");
    const city = splitedText[splitedText.length - 1];

    const hours = data.split("_")[0];

    if (!city) {
      return this.defaultCase(chatId);
    }

    await this.sendWeather(chatId, city);
    this.startSendWeather(chatId, city, hours);
  };

  private sendWeather = async (chatId: ChatId, city: string) => {
    const data = await this.weatherService.getWeatherByCity(city);

    this.bot.sendMessage(
      chatId,
      `City: ${data.name}\nTemperature: ${data.main.temp} C`,
      {
        reply_markup: stopAndGoToMainMenuKeyboard,
      }
    );
  };

  private startSendWeather = (chatId: ChatId, city: string, hours: string) => {
    const time = Number(hours) * 3600000;

    this.weatherInterval = setInterval(async () => {
      await this.sendWeather(chatId, city);
    }, time);
  };

  public stopSendWeather = (chatId: ChatId) => {
    clearInterval(this.weatherInterval);
    this.mainMenuCase(chatId);
  };
}

export default Weather;
