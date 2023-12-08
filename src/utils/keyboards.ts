export const mainKeyboard = {
  inline_keyboard: [
    [
      {
        text: "Weather",
        callback_data: "weather",
      },
      {
        text: "Currency",
        callback_data: "currency",
      },
    ],
  ],
};

export const intervalKeyboard = {
  inline_keyboard: [
    [
      {
        text: "3-hour interval",
        callback_data: "3_hours",
      },
      {
        text: "6-hour interval",
        callback_data: "6_hours",
      },
    ],
    [{ text: "To main menu", callback_data: "to_main_menu" }],
  ],
};

export const citiesKeyboard = {
  inline_keyboard: [
    [
      {
        text: "Dnipro",
        callback_data: "dnipro",
      },
      {
        text: "Valencia",
        callback_data: "valencia",
      },
    ],
    [{ text: "To main menu", callback_data: "to_main_menu" }],
  ],
};
