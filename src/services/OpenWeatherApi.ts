import axios from 'axios';

export const openWeatherApi = axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_API_URL,
});
