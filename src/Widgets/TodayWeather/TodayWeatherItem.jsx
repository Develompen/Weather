import './TodayWeather.css';
import Sun from '../../assets/icons/sun.svg';

const TodayWeatherItem = ({ data, cityName, darkMode }) => {

    const date = new Date(data.dt * 1000);

    return (
        <section className='weather-today'>
            <div className={`weather-today__container  ${darkMode ? 'shadov_black' : ''}`}>
                <div className="weather-today__card">
                    <div className="weather-today__details">
                        <h1 className="weather-today__temperature">
                            {Math.round(data?.temp)}°
                        </h1>
                        <h2 className="weather-today__label"
                            style={{color: darkMode ? 'white' : '#000'}}>
                            Сегодня
                        </h2>
                    </div>
                    <img src={Sun} alt="Погода солнце" />
                </div>
                <div className="weather-today__info">
                    <ul className="weather-info__list">
                        <li className="info-list__link">
                            Время: {date.getHours()}:{date.getMinutes()}
                        </li>
                        <li className="info-list__link">
                            Город: {cityName ?? ''}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TodayWeatherItem;