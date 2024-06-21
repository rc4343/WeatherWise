import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import LocationForm from './components/LocationForm';
import UnitSelect from './components/UnitSelect';
import LanguageSelect from './components/LanguageSelect';
import WeatherEffect from './components/WeatherEffect';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('location');
  const [unit, setUnit] = useState('metric');
  const [lang, setLang] = useState('en');
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async (lat, lon) => {
    try {
      const apiKey = '0df052fdfc6cf9131637ec5db331bb15';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&lang=${lang}&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      setError('Error fetching weather data');
    }
  }, [unit, lang]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        setError('Unable to retrieve your location');
      }
    );
  }, [fetchWeatherData]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    try {
      const apiKey = '0df052fdfc6cf9131637ec5db331bb15';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&lang=${lang}&appid=${apiKey}`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  const convertTemperature = (temp) => {
    if (unit === 'metric') {
      return temp;
    } else {
      return (temp * 9/5) + 32;
    }
  };


  const handleUnitChange = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  const handleLanguageChange = (event) => {
    setLang(event.target.value);
  };

  const getBackgroundClass = () => {
    if (!weatherData) return '';
    const { weather } = weatherData;
    const condition = weather[0].main.toLowerCase();
    if (condition.includes('rain') || condition.includes('thunderstorm')) {
      return { backgroundClass: 'rainy', buttonClass: 'rainy' };
    } else if (condition.includes('clear')) {
      return { backgroundClass: 'sunny', buttonClass: 'sunny' };
    } else if (condition.includes('snow')) {
      return { backgroundClass: 'snowy', buttonClass: 'snowy' };
    } else if (condition.includes('clouds')) {
      return { backgroundClass: 'cloudy', buttonClass: 'cloudy' };
    }
    return { backgroundClass: '', buttonClass: '' };
  };

  return (
    <div className={`weather-app ${getBackgroundClass().backgroundClass}`}>
      <WeatherEffect weatherData={weatherData} />
      <div className="container">
        <h1 className="app-title">Weather Wise</h1>
        <p className="app-description">Wise & Accurate Weather Forecast</p>
        <LocationForm
          location={location}
          handleLocationChange={handleLocationChange}
          handleLocationSubmit={handleLocationSubmit}
          getBackgroundClass={getBackgroundClass}
        />
        <UnitSelect unit={unit} handleUnitChange={handleUnitChange} />
        <LanguageSelect lang={lang} handleLanguageChange={handleLanguageChange} />
        {error && <p className="error-message">{error}</p>}
        {weatherData && (
          <WeatherInfo
            weatherData={weatherData}
            unit={unit}
            convertTemperature={convertTemperature}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
