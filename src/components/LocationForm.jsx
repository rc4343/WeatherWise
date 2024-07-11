import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';
;

const LocationForm = () => {
  const { location, setLocation, handleLocationSubmit } = useWeatherContext();

  return (
    <form onSubmit={handleLocationSubmit} className="location-form" data-testid="location-form">
      <input
        type="text"
        placeholder="Enter city or zip code"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-input"
        data-testid="location-input"
      />
      <button type="submit" className="location-button" data-testid="submit-button">
        Get Weather
      </button>
    </form>
  );
};

export default LocationForm;
