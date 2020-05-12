import React, { useReducer, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm.js";
import { todoReducer, initialState } from "./components/reducers/todoReducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  const handleChanges = (e) => {
    setTask(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        task: task,
        id: Date.now(),
        completed: false,
      },
    });
    setTask("");
  };

  // Maps through todos when the onclick event is invoked, then toggles the state of completed to the opposite of the current boolean it's set to.
  const toggleComplete = (itemID) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: itemID });
  };

  // Sets the state to a new filtered array that only returns tasks that have a completed state of false.
  const removeTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "REMOVE_TODO" });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to your Todo App!</h1>
        <TodoForm
          todos={state}
          addTodo={addTodo}
          removeTodo={removeTodo}
          handleChanges={handleChanges}
          value={task}
        />
      </div>
      <TodoList todos={state} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
