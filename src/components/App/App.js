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
    { title: "Task2", important: true, done: false, id: "2" },
    { title: "Task3", important: false, done: false, id: "3" },
  ];

  
  
  let [listData, setListData] = useState(initialData);
  let [term, setTerm] = useState('');
  let [filter, setFilter] = useState('all'); // filter = 'all'`

  // let [done, setDone] = useState(inintialDone);
  //Способ 2
  /*
  let [isFilter, setFilter] = useState(false);
  let [filteredData, setFilteredData] = useState([]);
  */
 
 
 let done = listData.reduce((count, item) => {
   return count + item.done;
  }, 0);
  
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
    // alert(id);
    const ind = listData.findIndex((elem) => elem.id == id);
    let newData = [...listData];
    newData[ind].done = !newData[ind].done;
    setListData(newData);
  };

  const deleteTaskHandler = (id) => {
    const ind = listData.findIndex((elem) => elem.id == id);
    let newData = [...listData];
    newData.splice(ind,1);
    setListData(newData);
  };

  const addTaskHandler = (text) => {
    // setText(text);
    // { title: "Task1", important: false, done: false, id: "1" }
    let task = {
      title: text,
      important: false,
      done: false,
      id: listData.length + 1
    }
    // listData.push(task);
    let newListData = [].concat(listData);
    newListData.push(task);
    setListData(newListData);
  };

 

  // const searchHandler = (term) => {
    //Способ 1
    // visibleItems = listData.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
    // setTerm(term);
    //Способ 2
    /*
    if (term) {
      setFilter(true);
      let filteredData = listData.filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredData(filteredData);
    } else {
      setFilter(false);
    }
    */
  // }

  const chooseFilter = (listData,term,filter) => {
    //all - 3 
    //active = all -done
    //done = done

    let searchListData = listData.filter(item =>item.title.toLowerCase().includes(term.toLowerCase()));

    switch (filter) {
      case "all": 
      return searchListData.filter(item=>item);
      case "active": 
      return searchListData.filter(item=>!item.done);
      case "done": 
      return searchListData.filter(item=>item.done);
    }
  }

 let visibleItems = chooseFilter(listData,term,filter);


  return (
    <div className='todo-app'>
      <AppHeader todo={listData.length-done} done={done}/>
      <div className='top-panel d-flex'>
        <SearchPanel onSearch={(term)=>setTerm(term)}/>
        <ItemStatusFilter filter={filter} onFilter={(filter)=>setFilter(filter)}/>
      </div>
      <List
        onDone={(id) => doneHandler(id)}
        // listData={isFilter ? filteredData : listData}
        listData={visibleItems}
        // listData={listData}
        onImportant={(id) => importantHandler(id)}
        onDelete={(id) => deleteTaskHandler(id)}
      />
      <ItemAddForm onAddTask={(text) => addTaskHandler(text)} />
    </div>
  );
};

export default App;
