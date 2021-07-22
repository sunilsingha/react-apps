import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    temp: 12,
    location: "New York, US",
  });

  const getWeather = (e) => {
    if (e.key === "Enter") {
      setWeather({
        temp: Math.floor(Math.random() * 50) + 1,
        location: location,
      });
      setLocation("");
    }
  };

  return (
    <div className={`${weather.temp > 20 ? "weatherapp warm" : "weatherapp"}`}>
      <Link to="/">&lt;Home</Link>
      <div className="main">
        <div className="weatherapp-search">
          <input
            type="text"
            placeholder="Search..."
            value={location}
            onKeyPress={getWeather}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="location-box">
          <div className="location">{weather.location}</div>
          <div className="date">{Date()}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{weather.temp}°c</div>
          <div className="weather">Sunny</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
