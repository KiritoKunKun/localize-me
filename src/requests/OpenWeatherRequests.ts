import { CurrentWeatherData } from '../interfaces/OpenWeatherInterfaces';
import { openWeatherApi } from '../services/OpenWeatherApi';

export const getCurrentWeatherData = async (
  lat: number,
  lon: number
): Promise<CurrentWeatherData> => {
  try {
    const { data } = await openWeatherApi.get('/weather', {
      params: {
        lat,
        lon,
        appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        units: 'metric',
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
