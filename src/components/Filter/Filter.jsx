import { useState } from "react";
import Select from "react-select";
import styles from "./Filter.module.css";

const options = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
];

const Filter = ({ selectedOption, changeHandler }) => {
  return (
    <div className={styles.FilterSection}>
      <p>Filter Todos based on:</p>
      <Select
        className={styles.selectedOption}
        value={selectedOption}
        options={options}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Filter;
