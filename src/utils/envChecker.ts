interface IVariables {
  TL_BOT_TOKEN: string;
  WEATHER_BASE_URL: string;
  WEATHER_API_KEY: string;
}

const variables: IVariables = {
  TL_BOT_TOKEN: process.env.TL_BOT_TOKEN || "",
  WEATHER_BASE_URL: process.env.WEATHER_BASE_URL || "",
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || "",
};

export const validateEnvVariables = () => {
  const keys = Object.keys(variables);

  Object.values(variables).forEach((variable, index) => {
    if (typeof variable !== "string" || !variable.length) {
      throw new Error(`Please check your ${keys[index]} ENV variable`);
    }
  });
  return true;
};
