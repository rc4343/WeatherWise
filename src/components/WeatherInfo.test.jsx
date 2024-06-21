import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherInfo from './WeatherInfo';

describe('WeatherInfo', () => {
  const mockWeatherData = {
    name: 'New York',
    weather: [{ main: 'Sunny', description: 'Clear sky', icon: '01d' }],
    main: { temp: 25, humidity: 50 },
    wind: { speed: 5 },
  };

  test('renders weather information', () => {
    render(<WeatherInfo weatherData={mockWeatherData} unit="metric" />);
    const locationName = screen.getByText('New York');
    const weatherDescription = screen.getByText('Clear sky');
    const temperature = screen.getByText('25°C');
    const humidity = screen.getByText('50%');
    const windSpeed = screen.getByText('5m/s');

    expect(locationName).toBeInTheDocument();
    expect(weatherDescription).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });

  test('converts temperature to Fahrenheit', () => {
    render(<WeatherInfo weatherData={mockWeatherData} unit="imperial" />);
    const temperature = screen.getByText('77.00°F');
    expect(temperature).toBeInTheDocument();
  });
});
