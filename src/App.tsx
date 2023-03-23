import React, { useState } from "react";

import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: Math.random().toString(), text: "finish the course" },
  ]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((ele) => ele.id !== todoId));
  };
  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList onDeleteTodo={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
