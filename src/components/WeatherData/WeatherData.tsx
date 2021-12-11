import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { ImMeter } from 'react-icons/im';
import { SiTailwindcss } from 'react-icons/si';
import Skeleton from 'react-loading-skeleton';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import {
  AdditionalDataContainer,
  Container,
  TemperatureContainer,
  TemperatureItemsContainer,
  WeatherContainer,
  WeatherItemsContainer,
} from './WeatherStyle';

interface WeatherDataProps {
  data: CurrentWeatherData;
  loading: boolean;
}

export const WeatherData: React.FC<WeatherDataProps> = ({ data, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <Skeleton
            width="100%"
            height="8rem"
            baseColor="rgb(255, 255, 255, 0.2)"
          />
          <Skeleton
            width="100%"
            height="7.2rem"
            baseColor="rgb(255, 255, 255, 0.2)"
          />
        </>
      ) : (
        <>
          <WeatherContainer>
            <TemperatureContainer>
              <h1>{Math.round(data.main.temp)}°</h1>
              <span>Sensação de {Math.round(data.main.feels_like)}°</span>
            </TemperatureContainer>

            <TemperatureContainer>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather-icon"
              />
              <span>{data.weather[0].description}</span>
            </TemperatureContainer>

            <TemperatureItemsContainer>
              <div>
                <FaTemperatureHigh />
                <span>{Math.round(data.main.temp_max)}°</span>
              </div>

              <div>
                <FaTemperatureLow />
                <span>{Math.round(data.main.temp_min)}°</span>
              </div>
            </TemperatureItemsContainer>
          </WeatherContainer>

          <AdditionalDataContainer>
            <WeatherItemsContainer>
              <span>Umidade</span>

              <div>
                <GiWaterDrop />
                <strong>{data.main.humidity}%</strong>
              </div>
            </WeatherItemsContainer>

            <WeatherItemsContainer>
              <span>Pressão</span>

              <div>
                <ImMeter />
                <strong>{data.main.pressure} hPa</strong>
              </div>
            </WeatherItemsContainer>

            <WeatherItemsContainer>
              <span>Vento</span>

              <div>
                <SiTailwindcss />
                <strong>{Math.round(data.wind.speed * 3.6)} km/h</strong>
              </div>
            </WeatherItemsContainer>
          </AdditionalDataContainer>
        </>
      )}
    </Container>
  );
};
