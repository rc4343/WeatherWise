import { useState, useEffect, useCallback } from 'react';
import { fetchWeatherData } from '../services/weatherService';

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [unit, setUnit] = useState('metric');
  const [lang, setLang] = useState('en');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getWeather = useCallback(async (lat, lon) => {
    try {
      setLoading(true);
      const data = await fetchWeatherData(lat, lon, unit, lang);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  }, [unit, lang]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Requesting geolocation...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Geolocation successful:", position.coords);
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setError('Unable to retrieve your location. Please enter a location manually.');
          setLoading(false);
        },
        { timeout: 10000 } // 10 second timeout
      );
    } else {
      console.log("Geolocation is not available");
      setError('Geolocation is not supported by your browser. Please enter a location manually.');
      setLoading(false);
    }
  }, [getWeather]);

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    if (!location.trim()) {
      setError('Please enter a location');
      return;
    }
    try {
      setLoading(true);
      const data = await fetchWeatherData(null, null, unit, lang, location);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    weatherData,
    location,
    setLocation,
    unit,
    setUnit,
    lang,
    setLang,
    error,
    loading,
    handleLocationSubmit,
  };
};

export default useWeather;
