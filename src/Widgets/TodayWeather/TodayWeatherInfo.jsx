import './TodayWeather.css';
import temperature from '../../assets/icons/temperature.svg';
import pressure from '../../assets/icons/pressure.svg';
import precipitation from '../../assets/icons/precipitation.svg';
import wind from '../../assets/icons/wind.svg';

const TodayWeatherInfo = ({data, darkMode}) => {
    return (
        <section className="section">
            <div className="today-weather">
                <div className={`today-weather__info ${darkMode ? 'shadov_black' : ''}`}>
                    <div className="today-weather__item">
                        <div className="weather-item__list">
                            <img src={temperature} className='temperature' alt="" />
                            <h3 className='today-weather__title'>
                                Температура
                            </h3>
                        </div>
                        <div className="weather-item__list">
                            <img src={pressure} className='pressure' alt="" />
                            <h3 className='today-weather__title'>
                                Давление
                            </h3>
                        </div>
                        <div className="weather-item__list">
                            <img src={precipitation} className='precipitation' alt="" />
                            <h3 className="today-weather__title">
                                Осадки
                            </h3>
                        </div>
                        <div className="weather-item__list">
                            <img src={wind} className='wind' alt="" />
                            <h3 className="today-weather__title">
                                Ветер
                            </h3>
                        </div>
                    </div>
                    <div className="today-weather__information">
                        <p className={`weather__paragrf ${darkMode ? 'text_white' : ''}`}>
                            {Math.round(data?.temp)}°  -  ощущается как  -  {Math.round(data?.feels_like)}°
                        </p>
                        <p className={`weather__paragrf ${darkMode ? 'text_white' : ''}`}>
                            {data?.pressure} мм
                        </p>    
                        <p className={`weather__paragrf ${darkMode ? 'text_white' : ''}`}>
                            {data?.humidity} 
                        </p>
                        <p className={`weather__paragrf ${darkMode ? 'text_white' : ''}`}>
                            {Math.round(data?.wind_speed)} м/с
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodayWeatherInfo;