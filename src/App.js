import "./css/App.css";
import { dayNames, getOrdinal, monthNames, formatAMPM } from "./formatDateTime";
import React, { useEffect } from "react";

export function App() {
  const [todo, setItem] = React.useState("");
  const [list, updateList] = React.useState([]);
  const [date, updateDate] = React.useState(new Date());

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      updateDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  });

  const createToDoItem = (newItem) => {
    if (newItem.target.value !== "") {
      setItem({ text: newItem.target.value, key: Date.now() });
    }
  };

  const addItem = () => {
    if (todo !== "" && todo.text !== undefined) {
      updateList([...new Set([...list, todo])]);
      document.getElementById("Input").value = "";
    }
  };

  const deleteItem = (index) => {
    updateList((list) => {
      let items = [...list];
      items.splice(index, 1);
      return items;
    });
  };

  return (
    <div className="App">
      <div id="dateInfo">
        <p id="monthYear">{`${
          monthNames[date.getMonth()]
        } ${date.getFullYear()}`}</p>
        <p id="todaysDate">{`${dayNames[date.getDay() - 1]}, ${getOrdinal(
          date.getDate()
        )}`}</p>
        <p id="currentTime">{formatAMPM(date)}</p>
      </div>
      <input id="Input" placeholder="Enter Todo..." onChange={createToDoItem} />
      <button id="Add" onClick={addItem}>
        Add
      </button>
      {list.map((item, index) => {
        return (
          <ol key={index}>
            <p id="list">
              {`${index + 1}. ${item.text[0].toUpperCase()}${item.text
                .slice(1)
                .toLowerCase()}`}
              <button id="Edit">Edit</button>
              <button id="Delete" onClick={() => deleteItem(index)}>
                ✗
              </button>
            </p>
          </ol>
        );
      })}
    </div>
  );
}

export default App;
