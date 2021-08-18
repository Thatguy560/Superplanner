import "./css/App.css";
import React, { useRef } from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [list, updateList] = React.useState([]);

  const toDoItem = (item) => {
    let newItem = { text: item.target.value, key: Date.now() };
    setItem(newItem);
  };

  const addItem = () => {
    updateList((prevState) => [...list, item]);
    document.getElementById("Input").value = "";
  };

  const deleteItem = (index) => {
    updateList((prevState) => {
      let items = [...prevState];
      items.splice(index, 1);
      return items;
    });
  };

  return (
    <div className="App">
      <h2>Type a todo item you want to complete</h2>
      <input
        type="text"
        placeholder="Enter Task..."
        id="Input"
        onChange={toDoItem}
      />
      <button id="Add" onClick={addItem}>
        Add
      </button>
      {list.map((item, index) => {
        return (
          <p id="list">
            <ol key={index}>
              {`${index + 1}. ${item.text[0].toUpperCase()}${item.text
                .slice(1)
                .toLowerCase()}`}
              <button>Edit</button>
              <button id="Delete" onClick={() => deleteItem(index)}>
                ✗
              </button>
            </ol>
          </p>
        );
      })}
    </div>
  );
}

export default App;
