import React, { useState } from "react";
import FlipMove from "react-flip-move";
import { TimeDate } from "./components/dateTime";
import { Weather } from "./components/weatherConditions";
import "./css/App.css";
import "./css/dateTime.css";
import "./css/weatherConditions.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, updateTodoList] = useState([]);
  const [editingText, setEditingText] = useState("");
  const [todoEditing, setTodoEditing] = useState("");

  React.useEffect(() => {
    const accessedStorage = localStorage.getItem("todoList");
    const loadedTodoList = JSON.parse(accessedStorage); // Parse converts a JSON string into an object.
    if (loadedTodoList) {
      updateTodoList(loadedTodoList);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todoList); // stringify turns any JavaScript into JSON.
    localStorage.setItem("todoList", json); // Creates a Key/Pair value
  }, [todoList]);

  const addItem = (e) => {
    e.preventDefault();
    const myNewTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    if (myNewTodo.text !== "") {
      updateTodoList([...todoList, myNewTodo]);
      setTodo("");
    }
  };

  const deleteItem = (id) => {
    updateTodoList((list) => {
      let items = [...todoList];
      items.splice(id, 1);
      return items;
    });
  };

  const editItem = (id) => {
    const updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.text = editingText;
      }
      return todo;
    });
    updateTodoList(updatedTodos);
    setTodoEditing("");
    setEditingText("");
  };

  const itemCompleted = (id) => {
    let allItems = [...todoList];
    allItems[id].completed = !allItems[id].completed;
    updateTodoList(allItems);
  };

  const seeCompletedItems = () => {
    const sorted = [...todoList].filter((item) => item.completed === true);
    console.log(todoList);
    updateTodoList(sorted);
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
          placeholder="Enter Todo..."
          onChange={(e) => setTodo(e.target.value)} // e is an event object, target is the input, value is the value of that input
          value={todo}
        />
        <button id="Add" type="submit">
          Add
        </button>
      </form>
      {todoList.length > 0 ? (
        <button id="seeCompleted" onClick={seeCompletedItems}>
          See Completed Todos
        </button>
      ) : (
        <div></div>
      )}
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {todoList.map((item, id) => {
          return (
            <ol key={item.id}>
              <p id="list">
                <input type="checkbox" onClick={() => itemCompleted(id)} />
                {todoEditing === item.id ? (
                  <input
                    type="text"
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                  />
                ) : (
                  `${id + 1}. ${item.text[0].toUpperCase()}${item.text
                    .slice(1)
                    .toLowerCase()}`
                )}
                {todoEditing === item.id ? (
                  <button id="SubmitEdit" onClick={() => editItem(item.id)}>
                    Submit Edit ✔
                  </button>
                ) : (
                  <button id="Edit" onClick={() => setTodoEditing(item.id)}>
                    Edit
                  </button>
                )}
                <button id="Delete" onClick={() => deleteItem(id)}>
                  Delete ✕
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
