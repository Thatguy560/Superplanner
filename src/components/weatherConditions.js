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
  );
}
