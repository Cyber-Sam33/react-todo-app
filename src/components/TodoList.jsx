import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log(todo);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([...todos, todo]);
    console.log("New todo", todo);
    console.log("Array of todos", todos);
  };

  return (
    <>
      <h1>Today's Todos</h1>
      <TodoForm addTodo={addTodo} />
    </>
  );
}

export default TodoList;
