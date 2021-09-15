import React, { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY.js";

const API = {
  KEY: API_KEY,
  URL: "https://api.openweathermap.org/data/2.5/",
};

export function Weather() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${API.URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API.KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      <div
        className={
          typeof weatherData.main != "undefined"
            ? weatherData.main.temp > 15 &&
              weatherData.main.temp < 30 &&
              weatherData.weather[0].main === "Clouds"
              ? "weather warmcloudy"
              : weatherData.main.temp > 15 &&
                weatherData.main.temp < 30 &&
                weatherData.weather[0].main === "Clear"
              ? "weather warm"
              : weatherData.main.temp < 1 &&
                weatherData.weather[0].main !== "Rain"
              ? "weather ice"
              : weatherData.weather[0].main === "Thunderstorm"
              ? "weather lightning"
              : weatherData.weather[0].main === "Snow"
              ? "weather snow"
              : weatherData.main.temp >= 30 &&
                weatherData.weather[0].main !== "Rain"
              ? "weather hot"
              : weatherData.main.temp < 6 &&
                weatherData.weather[0].main === "Clear"
              ? "weather coldclear"
              : weatherData.weather[0].main === "Rain"
              ? "weather raining"
              : "weather clear"
            : "weather"
        }
      >
        {typeof weatherData.main != "undefined" ? (
          <div className="weather-box">
            <div id="location">
              {weatherData.name}, {weatherData.sys.country}
              <div id="temp">{Math.round(weatherData.main.temp)}°c</div>
              <div id="weather">{weatherData.weather[0].main}</div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
