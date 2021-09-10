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
    if (myNewTodo.text !== "") {
      updateTodoList([...todoList, myNewTodo]);
      setTodo("");
    }
  };

  const deleteItem = (id) => {
    // updateTodoList([...todoList].filter((todo) => todo.id !== todoList[id].id));
    updateTodoList((list) => {
      let items = [...todoList];
      items.splice(id, 1);
      return items;
    });
  };

  const itemCompleted = (id) => {
    let allItems = [...todoList];
    allItems[id].completed = !allItems[id].completed;
    updateTodoList(allItems);
  };

  const seeCompletedItems = () => {
    const sorted = [...todoList].filter((item) => item.completed === true);
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
          onChange={(e) => setTodo(e.target.value)} // e.target.value (e is an event object, target is the input, value is the value of that input)
          value={todo}
        />
        <button id="Add" type="submit">
          Add
        </button>
      </form>
      <button id="seeCompleted" onClick={seeCompletedItems}>
        See Completed Todos
      </button>
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
      >
        {todoList.map((item, id) => {
          return (
            <ol key={item.id}>
              <p id="list">
                {`${id + 1}. ${item.text[0].toUpperCase()}${item.text
                  .slice(1)
                  .toLowerCase()}`}

                <input
                  type="checkbox"
                  class="checkboxField"
                  onClick={() => itemCompleted(id)}
                />

                <button id="Delete" onClick={() => deleteItem(id)}>
                  Delete ✕
                </button>
                {/* {console.log(todoList)} */}
              </p>
            </ol>
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
