import React, { useState } from "react";

import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import List from "../List/List";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import "./App.css";

const App = () => {
  let initialData = [
    { title: "Task1", important: false, done: false, id: "1" },
    { title: "Task2", important: true, done: true, id: "2" },
    { title: "Task3", important: false, done: false, id: "3" },
  ];
  let [listData, setListData] = useState(initialData);

  const importantHandler = (id) => {
    const ind = listData.findIndex((elem) => elem.id == id);
    // let newData = [];
    // listData.forEach((element) => {
    //   newData.push(element);
    // });

    // let newData = listData.map((element) => {
    //   return element;
    // });

    // let newData = listData.slice();
    // let newData = [].concat(listData);
    let newData = [...listData];
    newData[ind].important = !newData[ind].important;
    setListData(newData);

    // let newData = listData;
    // listData[ind].important = !listData[ind].important;

    // listD = [3,2,1];
    // let a = 5;
    // let b = a;
    // console.log(a, b);
    // b = 6;
    // console.log(a, b);
  };
  const doneHandler = (id) => {
    const ind = listData.findIndex((elem) => elem.id == id);
    let newData = [...listData];
    newData[ind].done = !newData[ind].done;
    setListData(newData);
  };
  const addTextHandler = (text) => {
    // setText(text);
  };
  return (
    <div className='todo-app'>
      <AppHeader />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <List
        onDone={(id) => doneHandler(id)}
        listData={listData}
        onImportant={(id) => importantHandler(id)}
      />
      <ItemAddForm onAddText={(text) => addTextHandler(text)} />
    </div>
  );
};

export default App;
