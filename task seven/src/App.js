import { useState } from "react";
import "./App.css";

const key = "1dd9c6c14dd9f09e6f078c5ed74d978b";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  async function fetchWeather(cityName) {
    try {
      if (!cityName) return;

      setError("");
      setWeatherData(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  }

  async function fetchByLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
          );
          const data = await response.json();
          setWeatherData(data);
          setError("");
        },
        () => setError("Unable to fetch location")
      );
    } else {
      setError("Geolocation not supported");
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Weather Dashboard</h1>
        <p>Get weather updates for any place</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter place name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="search-btn" onClick={() => fetchWeather(city)}>
          Search
        </button>
        <button className="location-btn" onClick={fetchByLocation}>
          My Location
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="dashboard">
        {weatherData ? (
          <WeatherCard data={weatherData} />
        ) : (
          !error && (
            <p className="placeholder">
              Enter a place name or get your location's temperature
            </p>
          )
        )}
      </div>
    </div>
  );
}

function WeatherCard({ data }) {
  const current = data.list[0];
  const forecast = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

  return (
    <div className="weather-card">
      <div className="current-weather">
        <h2 className="city-name">{data.city.name}</h2>
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
          alt="weather"
        />
        <p className="temperature">{Math.round(current.main.temp)}°C</p>
        <p className="weather-description">{current.weather[0].description}</p>
      </div>

      <div className="weather-details">
        <div className="detail">
          💧
          <p>{current.main.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="detail">
          🌬️
          <p>{current.wind.speed} m/s</p>
          <p>Wind</p>
        </div>
        <div className="detail">
          🌡️
          <p>{Math.round(current.main.feels_like)}°C</p>
          <p>Feels Like</p>
        </div>
      </div>

      <div className="forecast">
        {forecast.slice(1, 5).map((day, i) => (
          <div className="forecast-day" key={i}>
            <p className="forecast-date">
              {new Date(day.dt_txt).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </p>
            <img
              className="forecast-icon"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="forecast"
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
