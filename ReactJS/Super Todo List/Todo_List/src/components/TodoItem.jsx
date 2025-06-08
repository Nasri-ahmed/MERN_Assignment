import React from "react";

const TodoItem = ({ todo, dispatch }) => {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? "bg-light text-muted" : ""
      }`}
    >
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <label
          className={`form-check-label ${
            todo.completed ? "text-decoration-line-through" : ""
          }`}
        >
          {todo.text}
        </label>
      </div>
      <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
