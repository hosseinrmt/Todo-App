import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    const newTodo = { id: Date.now(), text: todo, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const checkHandler = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => todo.id === id);
    const newTodo = { ...newTodos[index] };
    newTodo.isCompleted = !newTodo.isCompleted;
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const isEditingHandler = (e, id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    const newTodo = { ...newTodos[index] };
    newTodo.text = e.target.value;
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      {todos.length > 0 && (
        <TodoList
          todos={todos}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          isEditingHandler={isEditingHandler}
        />
      )}
    </div>
  );
};

export default TodoApp;
