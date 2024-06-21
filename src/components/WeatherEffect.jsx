import React from 'react';

const WeatherEffect = ({ weatherData }) => {
  const renderWeatherEffect = () => {
    if (!weatherData || !weatherData.weather) return null;

    const { weather } = weatherData;
    const isRaining = weather.some((w) => w.main.toLowerCase().includes('rain'));
    const isSunny = weather.some((w) => w.main.toLowerCase().includes('clear'));

    if (!isRaining && !isSunny) return null;

    const rainDrops = [];
    if (isRaining) {
      for (let i = 0; i < 100; i++) {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;

        rainDrops.push(
          <div
            key={i}
            className="rain-drop"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      }
    }

    return (
      <div className="weather-effect">
        {isRaining && <div className="rain-effect">{rainDrops}</div>}
        {isSunny && <div className="sun-effect" />}
      </div>
    );
  };

  return renderWeatherEffect();
};

export default WeatherEffect;
