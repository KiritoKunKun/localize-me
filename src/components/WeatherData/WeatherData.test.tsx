import { cleanup, render, screen } from '@testing-library/react';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { WeatherData } from './WeatherData';

const mock: CurrentWeatherData = {
  base: 'base',
  clouds: {
    all: 30,
  },
  cod: 20,
  coord: {
    lat: 1000,
    lon: 1000,
  },
  dt: 20,
  id: 20,
  main: {
    feels_like: 24,
    humidity: 12,
    pressure: 1020,
    temp: 26,
    temp_max: 28,
    temp_min: 23,
  },
  name: 'test',
  sys: {
    country: 'Brazil',
    id: 20,
    message: 200,
    sunrise: 10201323,
    sunset: 12021312,
    type: 1,
  },
  timezone: 123124123,
  weather: [
    {
      description: 'Nublado',
      icon: '04n',
      id: 20,
      main: 'test',
    },
  ],
  wind: {
    deg: 0.45,
    speed: 4,
  },
};

afterEach(cleanup);

it('Should show WeatherData on screen', () => {
  render(<WeatherData data={mock} loading={false} />);

  const icon = screen.queryByAltText('weather-icon');

  expect(icon).toBeVisible();
});

it('Should be loading WeatherData', () => {
  render(<WeatherData data={mock} loading={true} />);

  const icon = screen.queryByAltText('weather-icon');

  expect(icon).toBeNull();
});
