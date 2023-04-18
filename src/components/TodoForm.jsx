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
    <div className="p-3 d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          placeholder="Add your todo here..."
          value={todoInput}
          ref={inputRef}
        />
        <button className="ms-3 btn btn-primary" type="submit">
          Add todo
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
