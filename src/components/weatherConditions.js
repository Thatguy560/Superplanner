import React, { useEffect, useState } from "react";
// import ".././css/App.css";

const API = {
  KEY: "5f69e3c197e9a0d92d427ee6107b7ad8",
  URL: "https://api.openweathermap.org/data/2.5/",
};

export function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
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
    <div className="weather-box">
      {typeof weatherData.main != "undefined" ? (
        <div id="location">
          {weatherData.name}, {weatherData.sys.country}
          <div id="temp">{Math.round(weatherData.main.temp)}°c</div>
          <div id="weather">{weatherData.weather[0].main}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
