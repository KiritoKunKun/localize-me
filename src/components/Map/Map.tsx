import { GoogleApiWrapper, IMapProps, Map, Marker } from 'google-maps-react';

interface MapContainerProps extends IMapProps {
  marker: MarkerData;
}

interface MarkerData {
  lat: number;
  lon: number;
  label: string;
}

const MapContainer: React.FC<MapContainerProps> = ({ google, marker }) => {
  return (
    <Map
      google={google}
      center={{
        lat: marker.lat,
        lng: marker.lon,
      }}
    >
      <Marker
        mapCenter={{
          lat: marker.lat,
          lng: marker.lon,
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
})(MapContainer);
