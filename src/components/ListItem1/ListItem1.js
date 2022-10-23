import React, { useState } from "react";
import styles from "./ListItem.css";
import ListItem2 from "../ListItem2/ListItem2";



const ListItem1 = ({dataAppFake}) =>{

  return (
    <div>
      <h1>ListItem1</h1>
      {/* <span>{data}</span> */}
      <ListItem2 dataListItem1={(data) => dataAppFake(data)}/>
    </div>
  );
};

export default ListItem1;
