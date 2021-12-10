import { useEffect, useState } from 'react';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import { ImMeter } from 'react-icons/im';
import { MdOutlineLocationOn } from 'react-icons/md';
import { SiTailwindcss } from 'react-icons/si';
import { Button } from '../../components/Button/Button';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { getCurrentWeatherData } from '../../requests/OpenWeatherRequests';
import { getAddressByCoord } from '../../utils/GeocodeUtils';
import {
  AdditionalDataContainer,
  AddressContainer,
  Container,
  TemperatureContainer,
  TemperatureItemsContainer,
  WeatherContainer,
  WeatherItemsContainer,
} from './HomeStyle';

export const Home: React.FC = () => {
  const [data, setData] = useState<CurrentWeatherData>();
  const [address, setAddress] = useState<string>('');

  const updateGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }: GeolocationPosition) => {
        const currentWeatherData = await getCurrentWeatherData(
          coords.latitude,
          coords.longitude
        );
        console.log(currentWeatherData);
        setData(currentWeatherData);

        const address = await getAddressByCoord(
          coords.latitude,
          coords.longitude
        );

        setAddress(address);
      },
      (error: GeolocationPositionError) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    updateGeolocation();
  }, []);

  return (
    <Container>
      <AddressContainer>
        <MdOutlineLocationOn />
        <span>{address}</span>
      </AddressContainer>

      {data && (
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

      <Button onClick={updateGeolocation}>Atualizar dados</Button>
    </Container>
  );
};
