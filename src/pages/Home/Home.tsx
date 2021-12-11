import { useCallback, useEffect, useState } from 'react';
import { AddressData } from '../../components/AddressData/AddressData';
import { Button } from '../../components/Button/Button';
import { WeatherData } from '../../components/WeatherData/WeatherData';
import { useToast } from '../../contexts/ToastContext';
import { CurrentWeatherData } from '../../interfaces/OpenWeatherInterfaces';
import { ToastType } from '../../interfaces/ToastInterfaces';
import { getCurrentWeatherData } from '../../requests/OpenWeatherRequests';
import { getAddressByCoord } from '../../utils/GeocodeUtils';
import { Container } from './HomeStyle';

export const Home: React.FC = () => {
  const { addToast } = useToast();

  const [data, setData] = useState<CurrentWeatherData>(
    {} as CurrentWeatherData
  );
  const [address, setAddress] = useState<string>('');
  const [loadingData, setLoadingData] = useState(true);
  const [loadingAddress, setLoadingAddress] = useState(true);

  const updateGeolocation = useCallback(() => {
    setLoadingData(true);
    setLoadingAddress(true);

    navigator.geolocation.getCurrentPosition(
      async ({ coords }: GeolocationPosition) => {
        getCurrentWeatherData(coords.latitude, coords.longitude)
          .then((response) => {
            setData(response);
            setLoadingData(false);
          })
          .catch((_) => {
            addToast({
              type: ToastType.ERROR,
              title: 'Erro',
              description:
                'Ocorreu um erro ao consultar os dados da região. Por favor, tente mais tarde.',
            });
          });

        getAddressByCoord(coords.latitude, coords.longitude)
          .then((response) => {
            setAddress(response);
            setLoadingAddress(false);
          })
          .catch((_) => {
            addToast({
              type: ToastType.ERROR,
              title: 'Erro',
              description:
                'Ocorreu um erro ao consultar o seu endereço. Por favor, tente mais tarde.',
            });
          });
      },
      (error: GeolocationPositionError) => {
        console.error(error);
      }
    );
  }, [addToast]);

  useEffect(() => {
    updateGeolocation();
  }, [updateGeolocation]);

  return (
    <Container>
      <AddressData address={address} loading={loadingAddress} />

      <WeatherData data={data} loading={loadingData} />

      <Button
        onClick={updateGeolocation}
        disabled={loadingData || loadingAddress}
      >
        Atualizar dados
      </Button>
    </Container>
  );
};
