import './WeatherWeek.css';
import WeatherWeekItem from './WeatherWeekItem';

const WeatherWeek = ({ daily, darkMode }) => {
    const nextDays = daily.slice(1, 8); 
    
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className={`footer-content__container  ${darkMode ? 'shadov_black' : ''}`}>
                    {nextDays.map((day, index) => (
                        <WeatherWeekItem darkMode = {darkMode} key={index} day={day} />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default WeatherWeek;

