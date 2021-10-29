import React from "react";
import { deleteTodo, toggleTodo } from "../redux/Todos/TodoReducer";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const todosDispatch = useDispatch();

  return (
    <div style={{ display: "block", width: "100%" }}>
      <input
        type="checkbox"
        value={todo.completed}
        onChange={() => todosDispatch(toggleTodo(todo.id))}
      />
      <span>{todo.title}</span>
      <button
        onClick={() => todosDispatch(deleteTodo(todo.id))}
        style={{ marginLeft: 15 }}
        type="button"
      >
        X
      </button>
    </div>
  );
};

export default Todo;
