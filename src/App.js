import "./css/App.css";
import React, { useEffect } from "react";
// import React, { useRef } from "react";

export function App() {
  const [todo, setItem] = React.useState("");
  const [list, updateList] = React.useState([]);

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
      {console.log(list)}
      <input
        id="Input"
        type="text"
        placeholder="Enter Todo..."
        onChange={createToDoItem}
      />
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
