import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnitSelect from './UnitSelect';

const handleUnitChange = jest.fn();

describe('UnitSelect', () => {
  test('renders unit select', () => {
    render(<UnitSelect unit="metric" handleUnitChange={handleUnitChange} />);
    const unitSelect = screen.getByLabelText('Units:');
    expect(unitSelect).toBeInTheDocument();
  });

  test('calls handleUnitChange on unit change', async () => {
    render(<UnitSelect unit="metric" handleUnitChange={handleUnitChange} />);
    const unitSelect = screen.getByLabelText('Units:');
    fireEvent.change(unitSelect, { target: { value: 'imperial' } });

    await waitFor(() => expect(handleUnitChange).toHaveBeenCalled());
  });
});
