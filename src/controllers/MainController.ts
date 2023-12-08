import TelegramBot, { ChatId } from "node-telegram-bot-api";

import { mainCommands, mainKeyboard } from "../utils/keyboards";

class MainController {
  bot: TelegramBot;

  constructor(bot: TelegramBot) {
    this.bot = bot;
  }

  public setCommands = () => {
    this.bot.setMyCommands(mainCommands);
  };

  public startCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Welcome!\nPlease choose the option", {
      reply_markup: mainKeyboard,
    });
  };

  public mainMenuCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "Please choose the option", {
      reply_markup: mainKeyboard,
    });
  };

  public defaultCase = (chatId: ChatId) => {
    this.bot.sendMessage(chatId, "The command is not found.\nPlease try again");
  };
}

export default MainController;
