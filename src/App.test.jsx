import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import WeatherApp from './App';

jest.mock('axios');

describe('WeatherApp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders location input', () => {
    render(<WeatherApp />);
    const locationInput = screen.getByPlaceholderText('Enter city or zip code');
    expect(locationInput).toBeInTheDocument();
  });

  test('fetches weather data on location submit', async () => {
    const mockWeatherData = {
      name: 'New York',
      weather: [{ main: 'Sunny', description: 'Clear sky', icon: '01d' }],
      main: { temp: 25, humidity: 50 },
      wind: { speed: 5 },
    };
    axios.get.mockResolvedValueOnce({ data: mockWeatherData });

    render(<WeatherApp />);
    const locationInput = screen.getByPlaceholderText('Enter city or zip code');
    fireEvent.change(locationInput, { target: { value: 'New York' } });
    const submitButton = screen.getByRole('button', { name: 'Get Weather' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const locationName = screen.getByText('New York');
      expect(locationName).toBeInTheDocument();
    });
  });

  test('handles error when fetching weather data', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network error'));

    render(<WeatherApp />);
    const locationInput = screen.getByPlaceholderText('Enter city or zip code');
    fireEvent.change(locationInput, { target: { value: 'Invalid' } });
    const submitButton = screen.getByRole('button', { name: 'Get Weather' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText('Error fetching weather data');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('changes unit from metric to imperial', () => {
    render(<WeatherApp />);
    const unitSelect = screen.getByLabelText('Units:');
    fireEvent.change(unitSelect, { target: { value: 'imperial' } });
    expect(unitSelect.value).toBe('imperial');
  });

  test('changes language', () => {
    render(<WeatherApp />);
    const languageSelect = screen.getByLabelText('Language:');
    fireEvent.change(languageSelect, { target: { value: 'fr' } });
    expect(languageSelect.value).toBe('fr');
  });
});
