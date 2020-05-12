import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return (
      <div className="todoList">
        {props.todos.map((todo, id) => (
          <Todo
            key={id}
            todo={todo}
            toggleComplete={props.toggleComplete}
          />
        ))}
      </div>
    );
  }

export default TodoList;
