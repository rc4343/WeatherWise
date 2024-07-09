import React from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import LocationForm from './components/LocationForm';
import UnitSelect from './components/UnitSelect';
import LanguageSelect from './components/LanguageSelect';
import WeatherEffect from './components/WeatherEffect';
import { useWeatherContext } from './context/WeatherContext';


const App = () => {
  const { weatherData, error, loading } = useWeatherContext();

  const getBackgroundClass = () => {
    if (!weatherData) return '';
    const condition = weatherData.weather[0].main.toLowerCase();
    if (condition.includes('rain') || condition.includes('thunderstorm')) {
      return 'rainy';
    } else if (condition.includes('clear')) {
      return 'sunny';
    } else if (condition.includes('snow')) {
      return 'snowy';
    } else if (condition.includes('clouds')) {
      return 'cloudy';
    }
    return '';
  };

  return (
    <div className={`weather-app ${getBackgroundClass()}`}>
      <WeatherEffect />
      <div className="container">
        <h1 className="app-title">Weather Wise</h1>
        <p className="app-description">Wise & Accurate Weather Forecast</p>
        <LocationForm />
        <UnitSelect />
        <LanguageSelect />
        {loading && <p>Loading weather data...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && !error && weatherData && <WeatherInfo />}
      </div>
    </div>
  );
};

export default App;
