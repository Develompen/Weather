import './NavBar.css';
import Weather from '../../assets/icons/weather.svg';
import Drop from '../../assets/icons/drop.svg';
import { useState } from 'react';

const NavBar = ({ setSearch, setDarkMode, darkMode }) => {
    const [active, setActive] = useState('');
    const citys = [
        'Москва', 'Ташкент', 'Самарканд', 'Алматы', 
        'Нью-Йорк', 'Лондон', 'Париж', 'Токио', 'Пекин', 
        'Дубай', 'Сингапур', 'Сеул', 'Берлин', 'Рим', 
        'Сидней', 'Торонто', 'Мехико', 'Мумбаи', 'Сан-Паулу', 
        'Стамбул', 'Бангкок', 'Каир', 'Лос-Анджелес', 'Шанхай', 
        'Дели', 'Мадрид', 'Амстердам', 'Вашингтон', 'Киев', 
        'Буэнос-Айрес', 'Кейптаун', 'Рио-де-Жанейро', 'Мельбурн', 
        'Астана', 'Анкара', 'Минск', 'Варшава', 'Прага', 
        'Будапешт', 'Вена', 'Барселона', 'Лиссабон', 'Осло', 
        'Хельсинки', 'Стокгольм', 'Афины', 'Тбилиси', 'Ереван', 
        'Баку', 'Доха', 'Эр-Рияд'
    ];

    const filtered = active.trim()
        ? citys.filter(city =>
            city.toLowerCase().includes(active.toLowerCase().trim())
        )
        : [];

    const handleCitySelect = (city) => {
        setActive(city); 
        setSearch(city); 
        setActive('');
    };

    return (
        <nav className="nav">
            <div className="nav__content container">
                <div className="nav__logo">
                    <img
                        className={`logo_img ${darkMode ? 'shadow_img' : ''}`}
                        src={Weather}
                        alt="Weather icon"
                    />
                    <h1 className={`nav__link ${darkMode ? 'shadow text-white' : ''}`}>
                        vue weather
                    </h1>
                </div>

                <div className="nav__options">
                    <button
                        className="nav__btn"
                        onClick={() => setDarkMode(prev => !prev)}
                    >
                        <img
                            className={darkMode ? 'shadow_img' : ''}
                            src={Drop}
                            alt="Toggle dark mode"
                        />
                    </button>

                    <div className="nav__search">
                        <input
                            className={`nav__input ${darkMode ? 'blue' : ''}`}
                            type="search"
                            value={active}
                            onChange={(e) => setActive(e.target.value)}
                            placeholder="Выбрать город"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    const selectedCity = filtered.length > 0 ? filtered[0] : e.target.value.trim();
                                    setSearch(selectedCity);
                                    setActive('');
                                }
                            }}
                        />

                        {filtered.length > 0 && (
                            <div className="custom__dropdown">
                                {filtered.map((city, index) => (
                                    <div
                                        className="dropdown__item"
                                        key={index}
                                        onClick={() => handleCitySelect(city)}
                                    >
                                        {city}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;