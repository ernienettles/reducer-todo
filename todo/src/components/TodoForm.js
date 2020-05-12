import React from "react";

const TodoForm = (props) => {
    return (
      <div>
        <form onSubmit={props.addTodo}>
          <input
            name="todo"
            type="text"
            placeholder="Enter a task"
            onChange={props.handleChanges}
            value={props.value}
          />
          <button>Add Task</button>
          <button onClick={props.removeTodo}>Remove Completed</button>
        </form>
      </div>
    );
}

export default TodoForm;