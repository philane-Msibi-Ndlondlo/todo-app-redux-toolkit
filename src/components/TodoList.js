import React from "react";

import { useSelector } from "react-redux";

import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
