import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    const newTodo = { id: Date.now(), text: todo, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList />
    </div>
  );
};

export default TodoApp;
