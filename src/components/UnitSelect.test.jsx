import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import UnitSelect from './UnitSelect';

const handleUnitChange = jest.fn();

describe('UnitSelect', () => {
  test('renders unit select', () => {
    render(<UnitSelect unit="metric" handleUnitChange={handleUnitChange} />);
    const unitSelect = screen.getByLabelText('Units:');
    expect(unitSelect).toBeInTheDocument();
  });

  test('calls handleUnitChange on unit change', () => {
    render(<UnitSelect unit="metric" handleUnitChange={handleUnitChange} />);
    const unitSelect = screen.getByLabelText('Units:');
    userEvent.click(unitSelect);
    expect(handleUnitChange).toHaveBeenCalled();
  });
});
