import React, { createContext, useContext } from 'react';
import useWeather from '../hooks/useWeather';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const weatherState = useWeather();
  
  return (
    <WeatherContext.Provider value={weatherState}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
