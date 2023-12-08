import axios from "axios";

class WeatherService {
  apiKey: string;
  baseUrl: string;
  units: string;

  constructor() {
    this.apiKey = process.env.WEATHER_API_KEY || "";
    this.baseUrl = process.env.WEATHER_BASE_URL || "";
    this.units = "metric";
  }

  public getWeatherByCity = async (city: string) => {
    const params = new URLSearchParams({
      q: city,
      APPID: this.apiKey,
      units: this.units,
    });

    const { data } = await axios.get(this.baseUrl, { params });
    return data;
  };
}

export default WeatherService;
