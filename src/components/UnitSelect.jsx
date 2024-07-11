import React from 'react';

const UnitSelect = ({ unit, handleUnitChange }) => {
  return (
    <div>
      <label htmlFor="unit-select">Units:</label>
      <select id="unit-select" value={unit} onChange={handleUnitChange}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  );
};

export default UnitSelect;
