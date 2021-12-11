import { useEffect, useState } from 'react';
import { AddressData } from '../../components/AddressData/AddressData';
import { Button } from '../../components/Button/Button';
import { WeatherData } from '../../components/WeatherData/WeatherData';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { getCurrentWeatherData } from '../../requests/OpenWeatherRequests';
import { getAddressByCoord } from '../../utils/GeocodeUtils';
import { Container } from './HomeStyle';

export const Home: React.FC = () => {
  const [data, setData] = useState<CurrentWeatherData>(
    {} as CurrentWeatherData
  );
  const [address, setAddress] = useState<string>('');
  const [loadingData, setLoadingData] = useState(true);
  const [loadingAddress, setLoadingAddress] = useState(true);

  const updateGeolocation = () => {
    setLoadingData(true);
    setLoadingAddress(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }: GeolocationPosition) => {
        getCurrentWeatherData(coords.latitude, coords.longitude).then(
          (response) => {
            setData(response);
            setLoadingData(false);
          }
        );

        getAddressByCoord(coords.latitude, coords.longitude).then(
          (response) => {
            setAddress(response);
            setLoadingAddress(false);
          }
        );
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
      <AddressData address={address} loading={loadingAddress} />

      <WeatherData data={data} loading={loadingData} />

      <Button onClick={updateGeolocation}>Atualizar dados</Button>
    </Container>
  );
};
