import React, { useState, useEffect, useRef } from "react";

function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 100_000),
      text: todoInput,
    });

    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          placeholder="Add a todo"
          value={todoInput}
          ref={inputRef}
        />
        <button>Add your todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
