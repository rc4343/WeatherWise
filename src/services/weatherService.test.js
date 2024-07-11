import getWeatherData from './weatherService.js';

jest.mock('./WeatherService', () => ({
    __esModule: true,
    default: jest.fn()
  }));
  
beforeEach(() => {
    jest.clearAllMocks();
  });

test('fetches weather data for city query', async () => {
    const mockResponse = { name: 'New York', weather: [{ description: 'sunny' }] };
    getWeatherData.mockResolvedValueOnce(mockResponse);
  
    const result = await getWeatherData('New York');
  
    expect(getWeatherData).toHaveBeenCalledWith('New York');
    expect(result).toEqual(mockResponse);
  });
  
  test('fetches weather data for coordinates query', async () => {
    const mockResponse = { name: 'London', weather: [{ description: 'cloudy' }] };
    getWeatherData.mockResolvedValueOnce(mockResponse);
  
    const result = await getWeatherData('51.5072,0.1276');
  
    expect(getWeatherData).toHaveBeenCalledWith('51.5072,0.1276');
    expect(result).toEqual(mockResponse);
  });
  
  test('throws error when API request fails', async () => {
    getWeatherData.mockRejectedValueOnce(new Error('Unable to fetch weather data'));
  
    await expect(getWeatherData('Tokyo')).rejects.toThrow('Unable to fetch weather data');
  });
  