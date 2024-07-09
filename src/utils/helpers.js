export const getBackgroundClass = (weatherData) => {
    if (!weatherData) return '';
    const { weather } = weatherData;
    const condition = weather[0].main.toLowerCase();
    if (condition.includes('rain') || condition.includes('thunderstorm')) {
      return { backgroundClass: 'rainy', buttonClass: 'rainy' };
    } else if (condition.includes('clear')) {
      return { backgroundClass: 'sunny', buttonClass: 'sunny' };
    } else if (condition.includes('snow')) {
      return { backgroundClass: 'snowy', buttonClass: 'snowy' };
    } else if (condition.includes('clouds')) {
      return { backgroundClass: 'cloudy', buttonClass: 'cloudy' };
    }
    return { backgroundClass: '', buttonClass: '' };
  };
  
  export const convertTemperature = (temp, unit) => {
    if (unit === 'metric') {
      return temp;
    } else {
      return (temp * 9/5) + 32;
    }
  };
  