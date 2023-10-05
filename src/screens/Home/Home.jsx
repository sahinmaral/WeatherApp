import {useEffect, useState} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import TodayWeatherCard from '../../components/TodayWeatherCard';
import BriefWeatherCardList from '../../components/BriefWeatherCardList';
import Show7DaysForecastButton from '../../components/Show7DaysForecastButton';
import SevenDaysForecastCardList from '../../components/SevenDaysForecastCardList';
import styles from './Home.styles';
import axios from 'axios';
import Loading from '../Loading';
import Error from '../Error';
import CheckInternet from '../CheckInternet';
import {getString} from '../../services/localStorage/react-native-async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSettingState,
  updateLanguage,
  updatePressureUnit,
  updateTemperatureUnit,
  updateWindSpeedUnit,
} from '../../redux/reducers/settingSlice';
import getI18n from '../../locales/i18n';
import useCheckInternet from '../../hooks/useCheckInternet';
import Geolocation from '@react-native-community/geolocation';
import {
  GEOCODE_API_URL,
  GEOCODE_API_KEY,
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from '@env';

function Home({navigation}) {
  //TODO: Yukseklik degisimlerinde animasyon eklenebilir
  const [visibleOf7DaysForecast, setVisibleOf7DaysForecast] = useState(false);

  const {language} = useSelector(getSettingState);
  const i18n = getI18n(language);
  const dispatch = useDispatch();

  const isConnected = useCheckInternet();

  const [fetchResult, setFetchResult] = useState({
    loading: true,
    error: null,
    currentWeather: null,
    hourlyWeathers: null,
    location: null,
  });

  async function fetchWeatherData({latitude, longitude, address}) {
    return Promise.all([
      axios.get(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`,
      ),
      axios.get(
        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${WEATHER_API_KEY}&units=metric`,
      ),
    ])
      .then(([resCurrentWeather, resHourlyWeathers]) => {
        return {
          currentWeatherData: resCurrentWeather.data,
          hourlyWeathersData: resHourlyWeathers.data,
        };
      })
      .then(({currentWeatherData, hourlyWeathersData}) => {
        return {
          ...fetchResult,
          loading: false,
          currentWeather: currentWeatherData,
          hourlyWeathers: hourlyWeathersData,
          location: {
            coordinates: {
              latitude,
              longitude,
            },
            address,
          },
        };
      })
      .catch(err => {
        throw err.message;
      });
  }

  function getAddressFromCoordinates({latitude, longitude}) {
    const url = `${GEOCODE_API_URL}/json?address=${latitude},${longitude}&key=${GEOCODE_API_KEY}`;
    return axios.get(url);
  }

  const requestLocationPermission = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status !== 'granted')
      throw i18n.t('locationServiceDeniedByUserMessage');
  };

  async function fetchLocation() {
    try {
      await requestLocationPermission();

      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          async position => {
            try {
              const addressResponse = await getAddressFromCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              const addressComponentsFromResponse =
                addressResponse.data.results[0].address_components;

              let address = {
                city: null,
                country: null,
              };

              addressComponentsFromResponse.forEach(addressComponent => {
                if (addressComponent.types.includes('country')) {
                  address.country = addressComponent.long_name;
                } else if (
                  addressComponent.types.includes('administrative_area_level_1')
                ) {
                  address.city = addressComponent.long_name;
                }
              });

              const location = {
                address,
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
              };

              resolve(location);
            } catch (error) {
              reject(error);
            }
          },
          error => {
            reject(error.message);
          },
          {enableHighAccuracy: false, timeout: 15000, maximumAge: 10000},
        );
      });
    } catch (error) {
      throw error;
    }
  }

  async function fetchLanguageFromLocalStorage() {
    const languageUserSetBefore = await getString('language');

    if (languageUserSetBefore) {
      dispatch(updateLanguage(languageUserSetBefore));
    }
  }

  async function fetchUnitsFromLocalStorage() {
    const temperatureUnitUserSetBefore = await getString('temperature');
    const windSpeedUnitUserSetBefore = await getString('windSpeed');
    const airPressureUnitUserSetBefore = await getString('pressure');

    if (temperatureUnitUserSetBefore) {
      dispatch(updateTemperatureUnit(temperatureUnitUserSetBefore));
    }

    if (windSpeedUnitUserSetBefore) {
      dispatch(updateWindSpeedUnit(windSpeedUnitUserSetBefore));
    }

    if (airPressureUnitUserSetBefore) {
      dispatch(updatePressureUnit(airPressureUnitUserSetBefore));
    }
  }

  useEffect(() => {
    (async () => {
      try {
        await fetchLanguageFromLocalStorage();

        if (!isConnected) {
          throw i18n.t('noInternetConnection');
        }

        await fetchUnitsFromLocalStorage();

        const {latitude, longitude, address} = await fetchLocation();

        const fetchedResult = await fetchWeatherData({
          latitude,
          longitude,
          address,
        });
        setFetchResult(fetchedResult);
      } catch (err) {
        setFetchResult({
          ...fetchResult,
          loading: false,
          error: err,
        });
      }
    })();
  }, []);

  if (fetchResult.loading) {
    return <Loading i18n={i18n} />;
  }

  if (!fetchResult.loading && !isConnected) {
    return <CheckInternet i18n={i18n}/>;
  }
  if (!fetchResult.loading && fetchResult.error) {
    return <Error error={fetchResult.error} i18n={i18n} />;
  }

  if (!fetchResult.loading && !fetchResult.error) {
    return (
      <View style={styles.container}>
        <TodayWeatherCard
          currentLocation={fetchResult.location}
          currentWeather={fetchResult.currentWeather}
          visibleOf7DaysForecast={visibleOf7DaysForecast}
          navigation={navigation}
        />
        <BriefWeatherCardList
          hourlyWeathers={fetchResult.hourlyWeathers.list}
        />
        {!visibleOf7DaysForecast ? (
          <Show7DaysForecastButton
            setVisibleOf7DaysForecast={setVisibleOf7DaysForecast}
          />
        ) : (
          <SevenDaysForecastCardList location={fetchResult.location} />
        )}
      </View>
    );
  }
}

export default Home;
