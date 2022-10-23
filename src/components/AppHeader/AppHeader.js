import React from "react";
import styles from "./AppHeader.module.css";

const AppHeader = ( {todo, done} ) => {
  // console.log(styles.AppHeader);
  return (
    // <div className={'' +' '+'d-flex'}>
    <div className={styles.AppHeader + ' d-flex'}>

      <h1 className={styles.Test}>My Todo List</h1>
      <h2>{todo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
