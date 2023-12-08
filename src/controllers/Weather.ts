import TelegramBot, { ChatId } from "node-telegram-bot-api";

import MainController from "./MainController";

import { citiesKeyboard, intervalKeyboard } from "../utils/keyboards";

class Weather extends MainController {
  constructor(bot: TelegramBot) {
    super(bot);
  }

  public weatherCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Please select the city", {
      reply_markup: citiesKeyboard,
    });
  };

  public cityCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Please select an interval", {
      reply_markup: intervalKeyboard,
    });
  };
}

export default Weather;
