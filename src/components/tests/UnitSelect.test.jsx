import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnitSelect from '../UnitSelect';

describe('UnitSelect', () => {
  it('renders the unit select component', () => {
    render(<UnitSelect unit="metric" handleUnitChange={() => {}} />);
    expect(screen.getByLabelText('Units:')).toBeInTheDocument();
  });

  it('renders the Celsius option', () => {
    render(<UnitSelect unit="metric" handleUnitChange={() => {}} />);
    expect(screen.getByText('Celsius')).toBeInTheDocument();
  });

  it('renders the Fahrenheit option', () => {
    render(<UnitSelect unit="metric" handleUnitChange={() => {}} />);
    expect(screen.getByText('Fahrenheit')).toBeInTheDocument();
  });

  it('selects the correct unit option', () => {
    const { rerender } = render(<UnitSelect unit="metric" handleUnitChange={() => {}} />);
    expect(screen.getByText('Celsius')).toBeSelected();

    rerender(<UnitSelect unit="imperial" handleUnitChange={() => {}} />);
    expect(screen.getByText('Fahrenheit')).toBeSelected();
  });

  it('calls handleUnitChange when unit is changed', () => {
    const handleUnitChange = jest.fn();
    render(<UnitSelect unit="metric" handleUnitChange={handleUnitChange} />);

    const celsiusOption = screen.getByText('Celsius');
    fireEvent.change(celsiusOption, { target: { value: 'metric' } });
    expect(handleUnitChange).toHaveBeenCalledWith('metric');

    const fahrenheitOption = screen.getByText('Fahrenheit');
    fireEvent.change(fahrenheitOption, { target: { value: 'imperial' } });
    expect(handleUnitChange).toHaveBeenCalledWith('imperial');
  });
});
