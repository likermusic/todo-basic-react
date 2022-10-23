import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ onImportant, onDone, listData, onDelete }) => {
  // console.log(listData);

  let items = listData.map((element) => {
    return (
      <ListItem
        onImportant={() => onImportant(element.id)}
        onDelete={() => onDelete(element.id)}
        onDone={() => onDone(element.id)}
        key={element.id}
        {...element}
      />
    );
  });

  return <ul className='list-group todo-list'>{items}</ul>;
};

export default List;
