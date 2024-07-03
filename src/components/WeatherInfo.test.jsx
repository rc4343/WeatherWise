import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherInfo from './WeatherInfo';

describe('WeatherInfo', () => {
  const mockWeatherData = {
    name: 'New York',
    weather: [{ main: 'Clear', description: 'Clear sky', icon: '01d' }],
    main: { temp: 25, humidity: 50 },
    wind: { speed: 5 },
  };

  const mockConvertTemperature = jest.fn(temp => temp);

  test('renders weather information correctly', () => {
    render(
      <WeatherInfo
        weatherData={mockWeatherData}
        unit="metric"
        convertTemperature={mockConvertTemperature}
      />
    );

    // Check if the location name is rendered
    expect(screen.getByText('New York')).toBeInTheDocument();

    // Check if the weather description is rendered
    expect(screen.getByText('Clear sky')).toBeInTheDocument();

    // Check if the temperature is rendered
    expect(screen.getByText('25 °C')).toBeInTheDocument();

    // Check if the humidity is rendered
    expect(screen.getByText('50%')).toBeInTheDocument();

    // Check if the wind speed is rendered
    expect(screen.getByText('5 m/s')).toBeInTheDocument();

    // Check if the weather icon is rendered
    const weatherIcon = screen.getByAltText('Clear sky');
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute('src', 'http://openweathermap.org/img/w/01d.png');
  });

  test('renders temperature in imperial units', () => {
    render(
      <WeatherInfo
        weatherData={mockWeatherData}
        unit="imperial"
        convertTemperature={mockConvertTemperature}
      />
    );

    expect(screen.getByText('25 °F')).toBeInTheDocument();
    expect(screen.getByText('5 mph')).toBeInTheDocument();
  });

  test('calls convertTemperature function', () => {
    render(
      <WeatherInfo
        weatherData={mockWeatherData}
        unit="metric"
        convertTemperature={mockConvertTemperature}
      />
    );

    expect(mockConvertTemperature).toHaveBeenCalledWith(25);
  });
});
