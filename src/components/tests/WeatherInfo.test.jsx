import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherInfo from '../WeatherInfo';
import { WeatherProvider } from '../../context/WeatherContext';

jest.mock('../../context/WeatherContext', () => ({
  useWeatherContext: jest.fn(),
  WeatherProvider: ({ children }) => <div>{children}</div>,
}));

describe('WeatherInfo', () => {
  const mockWeatherData = {
    name: 'New York',
    weather: [{ description: 'Sunny', icon: '01d' }],
    main: { temp: 20, feels_like: 18, humidity: 60 },
    wind: { speed: 5 },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    require('../../context/WeatherContext').useWeatherContext.mockReturnValue({
      weatherData: mockWeatherData,
      unit: 'metric',
    });
  });

  it('renders weather information with valid data', () => {
    render(
      <WeatherProvider>
        <WeatherInfo />
      </WeatherProvider>
    );
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('20.0°C')).toBeInTheDocument();
    expect(screen.getByText('18.0°C')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('5.0 m/s')).toBeInTheDocument();
  });

  it('does not render weather information with no data', () => {
    require('../../context/WeatherContext').useWeatherContext.mockReturnValue({
      weatherData: null,
      unit: 'metric',
    });
    render(
      <WeatherProvider>
        <WeatherInfo />
      </WeatherProvider>
    );
    expect(screen.queryByText('New York')).not.toBeInTheDocument();
    expect(screen.queryByText('Sunny')).not.toBeInTheDocument();
    expect(screen.queryByText('20.0°C')).not.toBeInTheDocument();
    expect(screen.queryByText('18.0°C')).not.toBeInTheDocument();
    expect(screen.queryByText('60%')).not.toBeInTheDocument();
    expect(screen.queryByText('5 m/s')).not.toBeInTheDocument();
  });
})