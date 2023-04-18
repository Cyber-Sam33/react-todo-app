import React, { useState } from "react";

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: todoInput,
    // });

    setTodoInput("");
    console.log(todoInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="text" onChange={handleChange} placeholder="Add a todo" value={todoInput}/>
      <button>Add your todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
