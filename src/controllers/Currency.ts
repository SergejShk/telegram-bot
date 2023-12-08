import TelegramBot, { ChatId } from "node-telegram-bot-api";

import MainController from "./MainController";

import CurrencyService from "@/services/CurrencyService";

import { currencyKeyboard } from "../utils/keyboards";

class Currency extends MainController {
  currencyService: CurrencyService;

  constructor(bot: TelegramBot, currencyService: CurrencyService) {
    super(bot);
    this.currencyService = currencyService;
  }

  public currencyCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Please choose the currency", {
      reply_markup: currencyKeyboard,
    });
  };

  public selectedCurrencyCase = async (chatId: ChatId, currency: string) => {
    const response = await this.currencyService.getCurrency(currency);
    this.bot.sendMessage(chatId, response, {
      reply_markup: currencyKeyboard,
    });
  };
}

export default Currency;
