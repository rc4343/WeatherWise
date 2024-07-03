import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherEffect from './WeatherEffect';

describe('WeatherEffect', () => {
  test('renders rain effect', () => {
    const mockWeatherData = {
      weather: [{ main: 'Rain' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const rainEffect = screen.getByTestId('rain-effect');
    expect(rainEffect).toBeTruthy();
  });

  test('renders sun effect', () => {
    const mockWeatherData = {
      weather: [{ main: 'Clear' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const sunEffect = screen.getByTestId('clear-effect');
    expect(sunEffect).toBeTruthy();
  });

  test('does not render effect for other weather conditions', () => {
    const mockWeatherData = {
      weather: [{ main: 'Clouds' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const cloudsEffect = screen.queryByTestId('clouds-effect');
    expect(cloudsEffect).toBeNull();
  });
});
