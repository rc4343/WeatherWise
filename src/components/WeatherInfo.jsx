import React from 'react';

const WeatherInfo = ({ weatherData, unit, convertTemperature }) => {
  return (
    <div className="weather-info">
      <h2 className="location-name">{weatherData.name}</h2>
      <div className="weather-details">
        <div className="weather-detail">
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
            className="weather-icon"
          />
          <p className="weather-description">{weatherData.weather[0].description}</p>
        </div>
        <div className="weather-detail">
          <p className="weather-label">Temperature:</p>
          <p className="weather-value">{convertTemperature(weatherData.main.temp)} {unit === 'metric' ? '°C' : '°F'}</p>
        </div>
        <div className="weather-detail">
          <p className="weather-label">Humidity:</p>
          <p className="weather-value">{weatherData.main.humidity}%</p>
        </div>
        <div className="weather-detail">
          <p className="weather-label">Wind Speed:</p>
          <p className="weather-value">{weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
