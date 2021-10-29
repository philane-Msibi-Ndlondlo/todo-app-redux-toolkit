import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../redux/Todos/TodoReducer";

const AddTodoForm = () => {
  const todosDispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleChange = (e) => e.target.value && setTitle(e.target.value);

  return (
    <form style={{ margin: "15px auto", textAlign: "center" }}>
      <input type="text" value={title} onChange={handleChange} />
      <button
        type="button"
        onClick={() => {
          todosDispatch(addTodo(title));
          setTitle("");
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
