import { getBackgroundClass } from './helpers';

describe('helpers', () => {
  describe('getBackgroundClass', () => {
    it('returns rainy class for rainy weather', () => {
      const weatherData = { weather: [{ main: 'Rain' }] };
      expect(getBackgroundClass(weatherData)).toEqual({ backgroundClass: 'rainy', buttonClass: 'rainy' });
    });

    it('returns sunny class for clear weather', () => {
      const weatherData = { weather: [{ main: 'Clear' }] };
      expect(getBackgroundClass(weatherData)).toEqual({ backgroundClass: 'sunny', buttonClass: 'sunny' });
    });

    it('returns snowy class for snowy weather', () => {
      const weatherData = { weather: [{ main: 'Snow' }] };
      expect(getBackgroundClass(weatherData)).toEqual({ backgroundClass: 'snowy', buttonClass: 'snowy' });
    });

    it('returns cloudy class for cloudy weather',() => {
        const weatherData = { weather: [{ main: 'Clouds' }] };
        expect(getBackgroundClass(weatherData)).toEqual({ backgroundClass: 'cloudy', buttonClass: 'cloudy' });
    });
});
})