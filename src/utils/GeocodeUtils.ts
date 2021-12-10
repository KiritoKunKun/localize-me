import Geocode from 'react-geocode';

export const getAddressByCoord = async (lat: number, lon: number) => {
  try {
    const { results } = await Geocode.fromLatLng(
      String(lat),
      String(lon),
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    );

    return results[0].formatted_address;
  } catch (error) {
    throw error;
  }
};
