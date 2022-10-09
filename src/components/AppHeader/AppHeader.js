import React from "react";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  console.log(styles.AppHeader);
  return (
    // <div className={'' +' '+'d-flex'}>
    <div className={styles.AppHeader + ' d-flex'}>

      <h1 className={styles.Test}>My Todo List</h1>
      <h2>3 more to do, 0 done</h2>
    </div>
  );
};

export default AppHeader;
