import {GEOCODE_API_URL, GEOCODE_API_KEY} from '@env';
import axios from 'axios';
import { PermissionsAndroid } from 'react-native';

async function getAddressFromCoordinates({latitude, longitude}) {
  const url = `${GEOCODE_API_URL}/json?address=${latitude},${longitude}&key=${GEOCODE_API_KEY}`;
  return axios.get(url);
}

async function askLocationPermission() {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
}

export {getAddressFromCoordinates,askLocationPermission};
