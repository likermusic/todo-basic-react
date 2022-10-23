import React, { useState } from "react";
import styles from "./ListItem.css";

const ListItem2 = ( {dataListItem1} ) =>{
  const data = 'SECRET DATA';
  dataListItem1(data);
  return (
    <main>
      <h4>ListItem2</h4>
      {/* <span>{data}</span> */}
    </main>
  );
};

export default ListItem2;
