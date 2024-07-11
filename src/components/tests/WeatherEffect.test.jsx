import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherEffect from '../WeatherEffect';
import { WeatherProvider } from '../../context/WeatherContext';

jest.mock('../../context/WeatherContext', () => ({
  useWeatherContext: jest.fn(),
  WeatherProvider: ({ children }) => <div>{children}</div>,
}));

describe('WeatherEffect', () => {
  

  beforeEach(() => {
    jest.clearAllMocks();
  });
  

  it('does not render rain effect with no weather data', () => {
    require('../../context/WeatherContext').useWeatherContext.mockReturnValue({
      weatherData: null,
    });
    render(
      <WeatherProvider>
        <WeatherEffect />
      </WeatherProvider>
    );
    expect(screen.queryByTestId('rain-effect')).not.toBeInTheDocument();
  
});
});