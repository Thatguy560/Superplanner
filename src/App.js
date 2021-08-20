import "./css/App.css";
import React from "react";
import FlipMove from "react-flip-move";
import { TimeDate } from "./DateTime";

export function App() {
  const [todo, setItem] = React.useState("");
  const [list, updateList] = React.useState([]);

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

    if (allItems[index].completed === false) {
      console.log("now complete");
    } else {
      console.log("now finished");
      allItems[index].completed = true;
    }

    allItems[index].completed = true;
    updateList(allItems);
  };

  return (
    <div className="App">
      <TimeDate />
      {console.log(list)}
      <input id="Input" placeholder="Enter Todo..." onChange={createToDoItem} />
      <button id="Add" onClick={addItem}>
        Add +
      </button>
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {list.map((item, index) => {
          return (
            <ol key={index}>
              <p id="list">
                {console.log(list)}
                {`${index + 1}. ${item.text[0].toUpperCase()}${item.text
                  .slice(1)
                  .toLowerCase()}`}
                <button id="Completed" onClick={() => itemCompleted(index)}>
                  Done
                </button>
                <button id="Edit">Edit</button>
                <button id="Delete" onClick={() => deleteItem(index)}>
                  X
                </button>
              </p>
            </ol>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
