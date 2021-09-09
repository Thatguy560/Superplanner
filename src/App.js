import React, { useState } from "react";
import FlipMove from "react-flip-move";
import { TimeDate } from "./components/dateTime";
import { Weather } from "./components/weatherConditions";
import "./css/App.css";
import "./css/dateTime.css";
import "./css/weatherConditions.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const [todoList, updateTodoList] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const myNewTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    updateTodoList([...todoList, myNewTodo]);
    setTodo("");
  };

  const deleteItem = (index) => {
    updateTodoList((list) => {
      let items = [...todoList];
      items.splice(index, 1);
      return items;
    });
  };
  // Then filter by checking if true or false to check if completed or not.
  const itemCompleted = (index) => {
    let allItems = [...todoList];
    allItems[index].completed = true;
    updateTodoList(allItems);
  };

  const sortCompletedItems = (e) => {
    e.preventDefault();
    updateTodoList([...todoList].filter((item) => item.completed !== true));
  };

  return (
    <div className="App">
      <form onSubmit={addItem}>
        <div className="box">
          <TimeDate />
          <Weather />
        </div>
        <input
          id="Input"
          type="text"
          placeholder="Enter Todo..."
          onChange={(e) => setTodo(e.target.value)} // e.target.value (e is an event object, target is the input, value is the value of that input)
          value={todo}
        />
        <button id="Add" type="submit">
          Add
        </button>
      </form>
      <button id="sortCompleted" onClick={sortCompletedItems}>
        Sort Completed Todos
      </button>
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {todoList.map((item, index) => {
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
