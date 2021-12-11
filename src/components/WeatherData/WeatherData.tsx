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
} from './WeatherDataStyle';

interface WeatherDataProps {
  data: CurrentWeatherData;
  loading: boolean;
}

export const WeatherData: React.FC<WeatherDataProps> = ({ data, loading }) => {
  return (
    <Container>
      <WeatherContainer>
        <TemperatureContainer>
          {loading ? (
            <>
              <Skeleton
                width="8rem"
                height="4rem"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
              <Skeleton
                width="8rem"
                height="1.2rem"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
            </>
          ) : (
            <>
              <h1>{Math.round(data.main.temp)}°</h1>
              <span>Sensação de {Math.round(data.main.feels_like)}°</span>
            </>
          )}
        </TemperatureContainer>

        <TemperatureContainer>
          {loading ? (
            <>
              <Skeleton
                width="8rem"
                height="4rem"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
              <Skeleton
                width="8rem"
                height="1.2rem"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
            </>
          ) : (
            <>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="weather-icon"
              />
              <span>{data.weather[0].description}</span>
            </>
          )}
        </TemperatureContainer>

        <TemperatureItemsContainer>
          <div>
            <FaTemperatureHigh />
            {loading ? (
              <Skeleton
                width="8rem"
                height="x"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
            ) : (
              <span>{Math.round(data.main.temp_max)}°</span>
            )}
          </div>

          <div>
            <FaTemperatureLow />
            {loading ? (
              <Skeleton
                width="8rem"
                height="2rem"
                baseColor="rgb(255, 255, 255, 0.2)"
              />
            ) : (
              <span>{Math.round(data.main.temp_min)}°</span>
            )}
          </div>
        </TemperatureItemsContainer>
      </WeatherContainer>

      <AdditionalDataContainer>
        <WeatherItemsContainer>
          <span>Umidade</span>

          <div>
            {loading ? (
              <>
                <Skeleton
                  width="8rem"
                  height="1.6rem"
                  baseColor="rgb(255, 255, 255, 0.2)"
                />
              </>
            ) : (
              <>
                <GiWaterDrop />
                <strong>{data.main.humidity}%</strong>
              </>
            )}
          </div>
        </WeatherItemsContainer>

        <WeatherItemsContainer>
          <span>Pressão</span>

          <div>
            {loading ? (
              <>
                <Skeleton
                  width="8rem"
                  height="1.6rem"
                  baseColor="rgb(255, 255, 255, 0.2)"
                />
              </>
            ) : (
              <>
                <ImMeter />
                <strong>{data.main.pressure} hPa</strong>
              </>
            )}
          </div>
        </WeatherItemsContainer>

        <WeatherItemsContainer>
          <span>Vento</span>

          <div>
            {loading ? (
              <>
                <Skeleton
                  width="8rem"
                  height="1.6rem"
                  baseColor="rgb(255, 255, 255, 0.2)"
                />
              </>
            ) : (
              <>
                <SiTailwindcss />
                <strong>{Math.round(data.wind.speed * 3.6)} km/h</strong>
              </>
            )}
          </div>
        </WeatherItemsContainer>
      </AdditionalDataContainer>
    </Container>
  );
};
