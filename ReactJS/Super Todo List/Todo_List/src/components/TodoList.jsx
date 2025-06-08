import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => {
  if (todos.length === 0) {
    return <p className="text-muted text-center">No tasks yet.</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
