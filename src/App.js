import React from "react";

import AddTodoForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const App = () => (
  <>
    <h2 style={{ textAlign: "center" }}>Todo App with Redux Toolkit</h2>
    <AddTodoForm />
    <div className="list" style={{ textAlign: "center" }}>
      <TodoList />
    </div>
  </>
);

export default App;
