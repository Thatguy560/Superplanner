import "./css/App.css";
import React, { useRef } from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [list, updateList] = React.useState([]);

  const toDoItem = (item) => {
    let newItem = item.target.value;
    setItem(newItem);
  };

  const addItem = () => {
    updateList((prevState) => [...list, item]);
    document.getElementById("Input").value = "";
  };

  const deleteItem = () => {
    console.log("this will delete particular item");
  };

  return (
    <div className="App">
      <h2>Type a todo item you want to complete</h2>
      <input
        type="text"
        placeholder="Add a todo"
        id="Input"
        onChange={toDoItem}
      />
      <button id="Add" onClick={addItem}>
        Add
      </button>
      {list.map((item, index) => {
        return (
          <ol key={index}>
            {item[0].toUpperCase() + item.slice(1).toLowerCase()}
            <button>Edit</button>
            <button id="Delete" onClick={deleteItem}>
              X
            </button>
          </ol>
        );
      })}
    </div>
  );
}

export default App;
