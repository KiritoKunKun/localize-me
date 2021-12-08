import { useEffect, useState } from 'react';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { getCurrentWeatherData } from '../../requests/OpenWeatherRequests';
import { getAddresByCoord } from '../../utils/GeocodeUtils';

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
    <div>
      <h1>{address}</h1>
      <button onClick={updateGeolocation}>Atualizar localização</button>
    </div>
  );
};
