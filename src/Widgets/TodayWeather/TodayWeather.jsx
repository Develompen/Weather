import './TodayWeather.css';
import TodayWeatherItem from './TodayWeatherItem';
import TodayWeatherInfo from './TodayWeatherInfo';

const TodayWeather = ({current, cityName, darkMode}) => {
    return (
        <main className="main container">
            <TodayWeatherItem darkMode = {darkMode} data = {current} cityName = {cityName}/>
            <TodayWeatherInfo darkMode = {darkMode} data = {current}/>
        </main>
    );
};

export default TodayWeather;