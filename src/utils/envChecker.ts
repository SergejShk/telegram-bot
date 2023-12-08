import { IVariables } from "@/interface/variables";

const variables: IVariables = {
  TL_BOT_TOKEN: process.env.TL_BOT_TOKEN || "",
  WEATHER_BASE_URL: process.env.WEATHER_BASE_URL || "",
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || "",
  PB_API: process.env.PB_API || "",
  MONO_API: process.env.MONO_API || "",
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
