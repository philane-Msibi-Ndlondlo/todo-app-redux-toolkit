import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      title: "Code JS",
      completed: false,
    },
    {
      id: 2,
      title: "Check out Pr",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: function (state, action) {
      state.value.push({
        id: state.value.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo: function (state, action) {
      state.value = state.value.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    deleteTodo: function (state, action) {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
  },
});

const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export { addTodo, toggleTodo, deleteTodo };

export default todoSlice;
