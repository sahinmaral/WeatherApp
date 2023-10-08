import axios from 'axios';
import {WEATHER_API_URL, WEATHER_API_KEY} from '@env';

async function fetchTodayWeatherData({latitude, longitude}) {
  return axios.get(
    `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`,
  );
}

async function fetchDailyWeatherData({latitude, longitude}) {
  return axios.get(
    `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&cnt=5&appid=${WEATHER_API_KEY}&units=metric`,
  );
}

export {fetchTodayWeatherData,fetchDailyWeatherData};
