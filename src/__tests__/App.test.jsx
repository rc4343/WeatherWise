import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { WeatherProvider } from '../context/WeatherContext';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the app title', () => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );

    expect(screen.getByText('Weather Wise')).toBeInTheDocument();
  });

  it('renders the app description', () => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );

    expect(screen.getByText('Wise & Accurate Weather Forecast')).toBeInTheDocument();
  });

  it('renders the LocationForm component', () => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );

    expect(screen.getByTestId('location-form')).toBeInTheDocument();
  });

  it('renders the LanguageSelect component', () => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );

    expect(screen.getByLabelText('Language:')).toBeInTheDocument();
  });

  it('renders the WeatherInfo component', () => {
    render(
      <WeatherProvider>
        <App />
      </WeatherProvider>
    );
});

  it('calls the handleLocationSubmit function when the form is submitted', async () => {
    const mockHandleLocationSubmit = jest.fn();
    render(
      <WeatherProvider value={{ handleLocationSubmit: mockHandleLocationSubmit }}>
        <App />
      </WeatherProvider>
    );

});
});