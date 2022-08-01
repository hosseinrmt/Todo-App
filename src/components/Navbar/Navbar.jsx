import styles from "./Navbar.module.css";

const Navbar = ({ todos }) => {
  const inCompleteTodos = todos.filter((todo) => !todo.isCompleted);

  return (
    <div className={styles.Navbar}>
      <h1>TodoList</h1>
      <span>
        {inCompleteTodos.length
          ? inCompleteTodos.length === 1
            ? `You have ${inCompleteTodos.length} incompleted Todo 😊`
            : `You have ${inCompleteTodos.length} incompleted Todos 😊`
          : "Add some Todos 😃"}
      </span>
    </div>
  );
};

export default Navbar;
