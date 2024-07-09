// src/components/UnitSelect.jsx
import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const UnitSelect = () => {
  const { unit, setUnit } = useWeatherContext();

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <div className="unit-select-container">
      <label htmlFor="unit-select">Temperature Unit:</label>
      <select id="unit-select" value={unit} onChange={handleUnitChange}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  );
};

export default UnitSelect;
