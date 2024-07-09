import React, { useEffect, useState } from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const WeatherEffect = () => {
  const { weatherData } = useWeatherContext();
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    if (weatherData && weatherData.weather) {
      const condition = weatherData.weather[0].main.toLowerCase();
      if (condition.includes('rain') || condition.includes('drizzle')) {
        const newRaindrops = Array.from({ length: 100 }, (_, i) => ({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${0.5 + Math.random() * 0.5}s`,
          animationDelay: `${Math.random() * 2}s`
        }));
        setRaindrops(newRaindrops);
      } else {
        setRaindrops([]);
      }
    }
  }, [weatherData]);

  if (!weatherData || !weatherData.weather) {
    return null;
  }

  return (
    <div className="weather-effect">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: drop.left,
            top: drop.top,
            animationDuration: drop.animationDuration,
            animationDelay: drop.animationDelay
          }}
        />
      ))}
    </div>
  );
};

export default WeatherEffect;
