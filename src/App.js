// src/App.js
import React, { useState } from 'react';
import useWeatherStore from './store';
import './App.css';

function App() {
    const { weather, loading, error, setCity, fetchWeather } = useWeatherStore();
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        setCity(inputValue);
        fetchWeather(inputValue);
    };

    return (
        <div className="App">
            <h1>날씨를 알려드립니다</h1>
            <div>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="도시 이름을 영어로 검색해!"
                />
                <button onClick={handleSearch}>검색</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>온도: {weather.main.temp}°C</p>
                    <p>날씨: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default App;


//6e55de3ed5b129ce6fef4d8071d4ee0e
//https://api.openweathermap.org/data/2.5/weather?lat=36.5&lon=127.0&appid=6e55de3ed5b129ce6fef4d8071d4ee0e