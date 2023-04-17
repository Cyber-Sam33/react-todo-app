import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      <input type="text" onChange={handleChange} />
      <button>Add Todo</button>
    </div>
  );
}

export default TodoForm;
