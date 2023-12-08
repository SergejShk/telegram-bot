import TelegramBot, { ChatId } from "node-telegram-bot-api";

import MainController from "./MainController";

import { currencyKeyboard } from "../utils/keyboards";

class Currency extends MainController {
  constructor(bot: TelegramBot) {
    super(bot);
  }

  public currencyCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Welcome!\nPlease choose the option", {
      reply_markup: currencyKeyboard,
    });
  };
}

export default Currency;
