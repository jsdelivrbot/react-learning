import axios from 'axios';

const API_KEY = 'f19be9cbc6c89bb137313c7f2308788c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&units=metric&q=${city},us`;
  const request = axios.get(url);
  // returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
