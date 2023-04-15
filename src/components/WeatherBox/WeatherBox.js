import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useCallback } from 'react';
import { useState } from 'react';

const WeatherBox = props => {

  const [weather, setWeather] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const handeCityChange = useCallback(city => {
    setPending(true);
    setError(false);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2705f8cfff59343db83cdf75f8df7087&units=metric`)
      .then(res => {
        if (res.status === 200) {
          return res.json()
            .then(data => {
              console.log(data);
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
        }
      })
  }, []);

  return (
    <section>
      <PickCity action={handeCityChange} />
      {(weather && !pending) && <WeatherSummary {...weather} />}
      { error && <ErrorBox />}
      {(pending && !error) && <Loader />}
    </section>
  )
};

export default WeatherBox;