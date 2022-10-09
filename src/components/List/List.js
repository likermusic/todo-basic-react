import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ onImportant, onDone, listData }) => {
  // console.log(listData);

  const deleteHandler = (id) => {
    const ind = listData.findIndex((elem) => elem.id == id);
    // let newData = [...listData];
    // newData.splice(ind, 1);
    let newData = [...listData.slice(0, ind), ...listData.slice(ind + 1)];
    // setListData(newData);
  };
  let items = listData.map((element) => {
    return (
      <ListItem
        onImportant={() => onImportant(element.id)}
        onDelete={() => deleteHandler(element.id)}
        onDone={() => onDone()}
        key={element.id}
        {...element}
      />
    );
  });

  return <ul className='list-group todo-list'>{items}</ul>;
};

export default List;
