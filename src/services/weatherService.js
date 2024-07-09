import axios from 'axios';

const API_KEY = '0df052fdfc6cf9131637ec5db331bb15';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (lat, lon, unit, lang, city = '') => {
  try {
    let url;
    if (lat && lon) {
      url = `${BASE_URL}?lat=${lat}&lon=${lon}&units=${unit}&lang=${lang}&appid=${API_KEY}`;
    } else {
      url = `${BASE_URL}?q=${city}&units=${unit}&lang=${lang}&appid=${API_KEY}`;
    }
    
    console.log('Fetching weather data from:', url);
    
    const response = await axios.get(url);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in fetchWeatherData:', error.response ? error.response.data : error.message);
    throw error;
  }
};
