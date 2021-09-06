import React, { useEffect, useState } from "react";
// import ".././css/App.css";

const API = {
  KEY: "5f69e3c197e9a0d92d427ee6107b7ad8",
  URL: "https://api.openweathermap.org/data/2.5/",
};

export function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

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
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      <div className="weather-box">
        <div id="location"></div>
        <div id="temp">°c</div>
        <div id="weather"></div>
      </div>
    </div>
  );
}

// const API = {
//   key: "158513168c9a5d22a8f2f4ecfb1a3730",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// export function Weather() {
//   const [location, setLocation] = useState("");
//   const [weather, setWeather] = useState({});

// useEffect(() => {
//   const success = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     const geoAPIUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
//     fetch(geoAPIUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         setLocation(data);
//       });
//   };
//   navigator.geolocation.getCurrentPosition(success);
// });

// useEffect(() => {
//   if (location !== "") {
//     fetch(
//       `${API.base}weather?q=${location.city}&units=metric&APPID=${API.key}`
//     )
//       .then((res) => res.json())
//       .then((result) => setWeather(result));
//   }
// });

// const displayWeather = () => {
//   if (location !== "") {
//     fetch(
//       `${API.base}weather?q=${location.city}&units=metric&APPID=${API.key}`
//     )
//       .then((res) => res.json())
//       .then((result) => setWeather(result));
//   }
// };
