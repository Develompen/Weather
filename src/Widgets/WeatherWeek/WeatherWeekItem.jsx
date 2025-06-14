import './WeatherWeek.css';

const WeatherWeekItem = ({ day, darkMode }) => {
    const date = new Date(day.dt * 1000);
    const weekDay = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const capitalizedWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
    const formattedDate = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
    return (
        <div className="footer-content__card">
            <h1 className={`card-title ${darkMode ? 'text_white' : ''}`}>
                {capitalizedWeekDay}
            </h1>
            <h2 className="card-after__title">
                {formattedDate}
            </h2>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="" />
            <h3 className={`card-before__title ${darkMode ? 'text_white' : ''}`}>
                {Math.round(day?.temp.day)}°
            </h3>
            <ul className="card-list">
                <li className="card-list__link">
                    {Math.round(day?.temp.night)}°
                </li>
                <li className="card-list__link">
                    {capitalize(day.weather[0].description)}
                </li>
            </ul>
        </div>
    );
};

export default WeatherWeekItem;
