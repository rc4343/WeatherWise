import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationForm from './LocationForm';

describe('LocationForm', () => {
  const handleLocationChange = jest.fn();
  const handleLocationSubmit = jest.fn();
  const getBackgroundClass = jest.fn().mockReturnValue({ buttonClass: '' });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders location input', () => {
    render(
      <LocationForm
        location=""
        handleLocationChange={handleLocationChange}
        handleLocationSubmit={handleLocationSubmit}
        getBackgroundClass={getBackgroundClass}
      />
    );
    const locationInput = screen.getByPlaceholderText('Enter city or zip code');
    expect(locationInput).toBeInTheDocument();
  });

  test('calls handleLocationChange on input change', () => {
    render(
      <LocationForm
        location=""
        handleLocationChange={handleLocationChange}
        handleLocationSubmit={handleLocationSubmit}
        getBackgroundClass={getBackgroundClass}
      />
    );
    const locationInput = screen.getByPlaceholderText('Enter city or zip code');
    fireEvent.change(locationInput, { target: { value: 'New York' } });
    expect(handleLocationChange).toHaveBeenCalledTimes(1);
  });

  test('calls handleLocationSubmit on form submit', () => {
    render(
      <LocationForm
        location=""
        handleLocationChange={handleLocationChange}
        handleLocationSubmit={handleLocationSubmit}
        getBackgroundClass={getBackgroundClass}
      />
    );
    const submitButton = screen.getByRole('button', { name: 'Get Weather' });
    fireEvent.click(submitButton);
    expect(handleLocationSubmit).toHaveBeenCalledTimes(1);
  });
});
