import { useEffect, useState } from 'react';
import NavBar from './Widgets/NavBar/NavBar';
import TodayWeather from './Widgets/TodayWeather/TodayWeather';
import WeatherWeek from './Widgets/WeatherWeek/WeatherWeek';
import Loading from './Widgets/Loading/Loading';
import axios from 'axios';


const App = () => {
  const apiKey = '18b15e8c252119aae6c109ef8a7eeabf';
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');
  const [search, setSearch] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'default';
  }, [darkMode]);

  useEffect(() => {
    const getCoords = async () => {
      try {
        const cordsResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search ?? 'Tashkent'}&appid=${apiKey}`);

        const { lat, lon, local_names: { ru } } = cordsResponse.data[0];
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&lang=ru&units=metric`
        );
        setCityName(ru);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCoords();
  }, [search]);

  if (!weatherData) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <NavBar setSearch={setSearch} search={search} setDarkMode = {setDarkMode} darkMode = {darkMode}/>
      <TodayWeather darkMode = {darkMode} current={weatherData.current} cityName={cityName} />
      <WeatherWeek daily={weatherData.daily} darkMode = {darkMode}/>
    </>
  )
}

export default App