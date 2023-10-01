import { useEffect, useState } from "react";
import { View } from "react-native";
import TodayWeatherCard from "../../components/TodayWeatherCard";
import BriefWeatherCardList from "../../components/BriefWeatherCardList";
import Show7DaysForecastButton from "../../components/Show7DaysForecastButton";
import SevenDaysForecastCardList from "../../components/SevenDaysForecastCardList";
import styles from "./Home.styles";
import axios from "axios";
import * as Location from "expo-location";
import Loading from "../Loading";
import Error from "../Error";
import { getString } from "../../services/localStorage/react-native-async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  getSettingState,
  updateLanguage,
  updatePressureUnit,
  updateTemperatureUnit,
  updateWindSpeedUnit,
} from "../../redux/reducers/settingSlice";
import getI18n from "../../locales/i18n";

function Home({ navigation }) {
  //TODO: Yukseklik degisimlerinde animasyon eklenebilir
  const [visibleOf7DaysForecast, setVisibleOf7DaysForecast] = useState(false);

  const { language } = useSelector(getSettingState);
  const i18n = getI18n(language);
  const dispatch = useDispatch();

  const [fetchResult, setFetchResult] = useState({
    loading: true,
    error: null,
    currentWeather: null,
    hourlyWeathers: null,
    location: null,
  });

  async function fetchWeatherData({ lat, lon, address }) {
    return Promise.all([
      axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`
      ),
      axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`
      ),
    ])
      .then(([resCurrentWeather, resHourlyWeathers]) => {
        return {
          currentWeatherData: resCurrentWeather.data,
          hourlyWeathersData: resHourlyWeathers.data,
        };
      })
      .then(({ currentWeatherData, hourlyWeathersData }) => {
        return {
          ...fetchResult,
          loading: false,
          currentWeather: currentWeatherData,
          hourlyWeathers: hourlyWeathersData,
          location: {
            coordinates: {
              lat,
              lon,
            },
            address,
          },
        };
      })
      .catch((err) => {
        throw err.message;
      });
  }

  async function fetchLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      throw "locationServiceDeniedByUserMessage";
    }

    let location = await Location.getLastKnownPositionAsync({
      requiredAccuracy: Location.Accuracy.Low,
    });
    if (!location) {
      location = await Location.getCurrentPositionAsync({
        accuracy: Location.LocationAccuracy.Low,
      });
    }

    let addressDetail = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    return {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      address: addressDetail[0],
    };
  }

  async function fetchLanguageFromLocalStorage() {
    const languageUserSetBefore = await getString("language");

    if (languageUserSetBefore) {
      dispatch(updateLanguage(languageUserSetBefore));
    }
  }

  async function fetchUnitsFromLocalStorage() {
    const temperatureUnitUserSetBefore = await getString("temperature");
    const windSpeedUnitUserSetBefore = await getString("windSpeed");
    const airPressureUnitUserSetBefore = await getString("pressure");

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
        await fetchUnitsFromLocalStorage();

        const { lat, lon, address } = await fetchLocation();
        const fetchedResult = await fetchWeatherData({ lat, lon, address });
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

  if (!fetchResult.loading && fetchResult.error) {
    return <Error error={fetchResult.error} i18n={i18n} />;
  }

  if (!fetchResult.loading && !fetchResult.error) {
    return (
      <View style={styles.container}>
        <TodayWeatherCard
          address={fetchResult.location.address}
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
