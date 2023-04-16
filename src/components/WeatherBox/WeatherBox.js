import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useCallback } from 'react';
import { useState } from 'react';

const WeatherBox = () => {

  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handleCityChange = useCallback(city => {
    setPending(true);
    setError(false);
    const API_KEY = '2705f8cfff59343db83cdf75f8df7087&';
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}units=metric`;
    
    fetch(API_URL)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              const weatherData = {
                name: data.name,
                temp: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].description
              };
              setWeather(weatherData);
              setPending(false);
            });
        } else {
          setError(true);
          setPending(false);
        }
      })
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {(weather && !pending && !error) && <WeatherSummary {...weather} />}
      { error && <ErrorBox />}
      {pending && <Loader />}
    </section>
  )
};

export default WeatherBox;