import React from 'react';

const LocationForm = ({ location, handleLocationChange, handleLocationSubmit, getBackgroundClass }) => {
  return (
    <form onSubmit={handleLocationSubmit} className="location-form" data-testid="location-form">
      <input
        type="text"
        placeholder="Enter city or zip code"
        value={location}
        onChange={handleLocationChange}
        className="location-input"
      />
      <button type="submit" className={`location-button ${getBackgroundClass().buttonClass}`}>
        Get Weather
      </button>
    </form>
  );
};

export default LocationForm;
