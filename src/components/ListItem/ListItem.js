import React, { useState } from "react";
import styles from "./ListItem.css";

const ListItem = ({
  title,
  important,
  done,
  onImportant,
  onDone,
  onDelete,
}) => {
  // console.log("LIST-ITEM");

  let style = {
    color: important ? "teal" : "black",
    fontWeight: important ? "bold" : "normal",
    textDecoration: done ? "line-through" : "none",
  };

  return (
    <li className='list-group-item'>
      <span className='todo-list-item'>
        <span onClick={onDone} className='todo-list-item-label' style={style}>
          {title}
        </span>
        <button
          onClick={onImportant}
          type='button'
          className='btn btn-outline-success btn-sm float-end'>
          <i className='fa fa-exclamation'></i>
        </button>
        <button
          onClick={onDelete}
          type='button'
          className='btn btn-outline-danger btn-sm float-end'>
          <i className='fa fa-trash'></i>
        </button>
      </span>
    </li>
  );
};

export default ListItem;
