// src/components/WeatherInfo.jsx
import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const WeatherInfo = () => {
  const { weatherData, unit } = useWeatherContext();

  if (!weatherData) return null;

  const { main, weather, wind } = weatherData;

  const getTemperature = (temp) => {
    return unit === 'metric' ? `${temp.toFixed(1)}°C` : `${(temp * 9/5 + 32).toFixed(1)}°F`;
  };

  const getWindSpeed = (speed) => {
    return unit === 'metric' ? `${speed.toFixed(1)} m/s` : `${(speed * 2.237).toFixed(1)} mph`;
  };

  const renderedOutput = (
    <div className="weather-info-container">
      <h2 className="location-name">{weatherData.name}</h2>
      <div className="weather-info-grid">
        <div className="weather-info-item">
          <i className="fas fa-thermometer-half"></i>
          <p>Temperature</p>
          <p className="weather-value">{getTemperature(main.temp)}</p>
        </div>
        <div className="weather-info-item">
          <i className="fas fa-temperature-low"></i>
          <p>Feels Like</p>
          <p className="weather-value">{getTemperature(main.feels_like)}</p>
        </div>
        <div className="weather-info-item">
          <i className="fas fa-wind"></i>
          <p>Wind Speed</p>
          <p className="weather-value">{getWindSpeed(wind.speed)}</p>
        </div>
        <div className="weather-info-item">
          <i className="fas fa-tint"></i>
          <p>Humidity</p>
          <p className="weather-value">{main.humidity}%</p>
        </div>
      </div>
      <div className="weather-description">
        <img 
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
          alt={weather[0].description}
        />
        <p>{weather[0].description}</p>
      </div>
    </div>
  );

  return renderedOutput;
};

export default WeatherInfo;
