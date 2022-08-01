import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import Navbar from "./Navbar/Navbar";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");

  useEffect(() => {
    filterHandler(selectedOption);
  }, [todos, selectedOption]);

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

  const changeHandler = (options) => {
    setSelectedOption(options.value);
    filterHandler(options.value);
  };

  const filterHandler = (status) => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="container">
      <Navbar todos={todos} />
      <Filter
        selectedOption={selectedOption.value}
        changeHandler={changeHandler}
      />
      <TodoForm addTodoHandler={addTodoHandler} />
      {todos.length > 0 && (
        <TodoList
          todos={filteredTodos}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          isEditingHandler={isEditingHandler}
        />
      )}
    </div>
  );
};

export default TodoApp;
