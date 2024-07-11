// LocationForm.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LocationForm from '../LocationForm.jsx';
import { WeatherProvider } from '../../context/WeatherContext';

describe('LocationForm', () => {
  const mockSetLocation = jest.fn();
  const mockHandleLocationSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with input and button', () => {
    render(
      <WeatherProvider value={{ location: '', setLocation: mockSetLocation, handleLocationSubmit: mockHandleLocationSubmit }}>
        <LocationForm />
      </WeatherProvider>
    );

    expect(screen.getByTestId('location-form')).toBeInTheDocument();
    expect(screen.getByTestId('location-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('displays the correct placeholder text', () => {
    render(
      <WeatherProvider value={{ location: '', setLocation: mockSetLocation, handleLocationSubmit: mockHandleLocationSubmit }}>
        <LocationForm />
      </WeatherProvider>
    );

    expect(screen.getByPlaceholderText('Enter city or zip code')).toBeInTheDocument();
  });


});
