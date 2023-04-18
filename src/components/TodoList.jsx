import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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

  const deleteTodo = (id) => {
    const deleted = [...todos].filter((todo) => todo.id !== id);
    setTodos(deleted);
  };

  const completeTodo = (id) => {
    let completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(completedTodos);
  };

  return (
    <>
      <div className="d-flex flex-column">
        <h1 className="h1">Today's Todos</h1>
        <TodoForm addTodo={addTodo} />
        <TodoItem
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
