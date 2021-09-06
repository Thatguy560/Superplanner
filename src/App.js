import "./css/App.css";
import "./css/dateTime.css";
import "./css/weatherConditions.css";
import React, { useState } from "react";
import FlipMove from "react-flip-move";
import { TimeDate } from "./components/dateTime";
import { Weather } from "./components/weatherConditions";

export function App() {
  const [todo, setItem] = useState("");
  const [list, updateList] = useState([]);

  const createToDoItem = (newItem) => {
    if (newItem.target.value !== "") {
      setItem({
        text: newItem.target.value,
        key: Date.now(),
        completed: false, // Set to true when completed
      });
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
  // Then filter by checking if true or false to check if completed or not.
  const itemCompleted = (index) => {
    let allItems = [...list];
    allItems[index].completed = true;
    updateList(allItems);
  };

  const sortCompletedItems = () => {
    updateList([...list].filter((item) => item.completed !== true));
  };

  return (
    <div className="App">
      <div className="box">
        <TimeDate />
        <Weather />
      </div>
      <input id="Input" placeholder="Enter Todo..." onChange={createToDoItem} />
      <button id="Add" onClick={addItem}>
        Add
      </button>
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        <button id="sortCompleted" onClick={sortCompletedItems}>
          Sort Completed Todos
        </button>
        {list.map((item, index) => {
          return (
            <ol key={index}>
              <p id="list">
                {`${index + 1}. ${item.text[0].toUpperCase()}${item.text
                  .slice(1)
                  .toLowerCase()}`}
                <button id="Completed" onClick={() => itemCompleted(index)}>
                  ✓
                </button>
                <button id="Delete" onClick={() => deleteItem(index)}>
                  ✕
                </button>
                <button id="Edit">Edit</button>
              </p>
            </ol>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
