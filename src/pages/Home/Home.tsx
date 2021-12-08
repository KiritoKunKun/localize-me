import { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { getCurrentWeatherData } from '../../requests/OpenWeatherRequests';
import { getAddresByCoord } from '../../utils/GeocodeUtils';
import { AddressContainer, Container, WeatherContainer } from './HomeStyle';

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

        const address = await getAddresByCoord(
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
        <h1>Endereço atual</h1>
        <span>{address}</span>
      </AddressContainer>

      <Button onClick={updateGeolocation}>Atualizar localização</Button>

      {data && (
        <WeatherContainer>
          {/* <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="weather-icon"
          /> */}

          <h1>{Math.round(data.main.temp)}°</h1>

          <div>
            <div>
              <strong>Umidade</strong>
              <span>{data.main.humidity}%</span>
            </div>

            <div>
              <strong>Pressão</strong>
              <span>{data.main.pressure} hPa</span>
            </div>

            <div>
              <strong>Vento</strong>
              <span>{Math.round(data.wind.speed * 3.6)} km/h</span>
            </div>
          </div>
        </WeatherContainer>
      )}

      {/* {data && (
        <Map
          marker={{
            lat: data.coord.lat,
            lon: data.coord.lon,
            label: 'Localização atual',
          }}
        />
      )} */}
    </Container>
  );
};
