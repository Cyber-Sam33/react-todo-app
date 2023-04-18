import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

function TodoItem({ todos, completeTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-item complete" : "todo-item"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiTwotoneDelete
          onClick={() => deleteTodo(todo.id)}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default TodoItem;
