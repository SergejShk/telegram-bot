export const mainCommands = [
  { command: "weather", description: "Weather" },
  { command: "currency", description: "Currency" },
];

export const mainMenuKeyboard = {
  inline_keyboard: [[{ text: "To main menu", callback_data: "to_main_menu" }]],
};

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
        text: "3-hour",
        callback_data: "3_hours",
      },
      {
        text: "6-hour",
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
        callback_data: "Dnipro",
      },
      {
        text: "Valencia",
        callback_data: "Valencia",
      },
    ],
    [{ text: "To main menu", callback_data: "to_main_menu" }],
  ],
};

export const currencyKeyboard = {
  inline_keyboard: [
    [
      {
        text: "USD",
        callback_data: "usd",
      },
      {
        text: "EUR",
        callback_data: "eur",
      },
    ],
    [{ text: "To main menu", callback_data: "to_main_menu" }],
  ],
};
