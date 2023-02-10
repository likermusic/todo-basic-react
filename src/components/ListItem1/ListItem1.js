import React, { useState } from "react";
import styles from "./ListItem.css";
import ListItem2 from "../ListItem2/ListItem2";



const ListItem1 = ({dataAppFake}) =>{
  let [h,setH] = React.useState(false);
  alert('ListItem1')
  React.useEffect(()=>{
    alert('ListItem1 from useEff')

  },[h]);
  return (
    <div>
      <h1 onClick={()=>setH(!h)}>ListItem1</h1>
      <T/>
      {/* <span>{data}</span> */}
      {/* <ListItem2 dataListItem1={(data) => dataAppFake(data)}/> */}
    </div>
  );
};

const T = () => {
  let [t,setT] = React.useState(false);
  alert('T')
  React.useEffect(()=>{
    alert('T from useEff')

  },[]);
  return (
    <div onClick={()=>setT(!t)}>
      ttttt
      {/* {t+'!!!'} */}
    </div>
  )
}
export default ListItem1;
