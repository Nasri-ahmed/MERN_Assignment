import React, { useReducer, useState } from "react";
import TodoList from "./components/TodoList";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">📝 Todo List</h2>
          <form onSubmit={handleAddTodo} className="d-flex gap-2 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </form>
          <TodoList todos={todos} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default App;
