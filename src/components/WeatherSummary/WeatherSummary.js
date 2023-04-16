import styles from './WeatherSummary.module.scss';
import PropTypes from 'prop-types';

const WeatherSummary = ({ description, name, icon, temp}) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{name}</h2>
        <p>
          <strong>Temp:</strong> {temp}
        </p>
      </div>
    </section>
  );
};

WeatherSummary.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
};

export default WeatherSummary;