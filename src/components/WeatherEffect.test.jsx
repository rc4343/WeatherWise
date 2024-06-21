import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherEffect from './WeatherEffect';

describe('WeatherEffect', () => {
  test('renders rain effect', () => {
    const mockWeatherData = {
      weather: [{ main: 'Rain' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const rainEffect = screen.getByClassName('rain-effect');
    expect(rainEffect).toBeInTheDocument();
  });

  test('renders sun effect', () => {
    const mockWeatherData = {
      weather: [{ main: 'Clear' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const sunEffect = screen.getByClassName('sun-effect');
    expect(sunEffect).toBeInTheDocument();
  });

  test('does not render effect for other weather conditions', () => {
    const mockWeatherData = {
      weather: [{ main: 'Clouds' }],
    };
    render(<WeatherEffect weatherData={mockWeatherData} />);
    const rainEffect = screen.queryByClassName('rain-effect');
    const sunEffect = screen.queryByClassName('sun-effect');
    expect(rainEffect).toBeNull();
    expect(sunEffect).toBeNull();
  });
});
