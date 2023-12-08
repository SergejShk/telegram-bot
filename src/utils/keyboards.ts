export const mainCommands = [
  { command: "weather", description: "Weather" },
  { command: "currency", description: "Currency" },
];

export const mainMenuKeyboard = {
  inline_keyboard: [[{ text: "To main menu", callback_data: "to_main_menu" }]],
};

export const stopAndGoToMainMenuKeyboard = {
  inline_keyboard: [
    [
      {
        text: "Stop and go to main menu",
        callback_data: "stop_and_go_to_main_menu",
      },
    ],
  ],
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
    ...mainMenuKeyboard.inline_keyboard,
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
    ...mainMenuKeyboard.inline_keyboard,
  ],
};

export const currencyKeyboard = {
  inline_keyboard: [
    [
      {
        text: "USD",
        callback_data: "USD",
      },
      {
        text: "EUR",
        callback_data: "EUR",
      },
    ],
    ...mainMenuKeyboard.inline_keyboard,
  ],
};
