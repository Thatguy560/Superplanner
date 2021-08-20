import React, { useEffect } from "react";

export function TimeDate() {
  const [date, updateDate] = React.useState(new Date()); // Move this to another component.

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      updateDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 === 0 ? 12 : hours; // Converts the hour '0' to '12'.
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + ampm;
  };

  return (
    <div id="dateInfo">
      <p id="monthYear">{`${
        monthNames[date.getMonth()]
      } ${date.getFullYear()}`}</p>
      <p id="todaysDate">{`${dayNames[date.getDay() - 1]}, ${getOrdinal(
        date.getDate()
      )}`}</p>
      <p id="currentTime">{formatAMPM(date)}</p>
    </div>
  );
}
