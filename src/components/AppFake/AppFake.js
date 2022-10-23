import React, { useState } from "react";
import ListItem1 from "../ListItem1/ListItem1";
import ListItem2 from "../ListItem2/ListItem2";
import ListItem3 from "../ListItem3/ListItem3";

const AppFake = () => {
  // const data = 'SECRET DATA';
  let [data,setData] = useState('Empty');
  // const appFakeHandler = (dataProp) => {
  //   setData(dataProp);
  //   // data = dataProp;
  // }
  console.log(data);
  return (
    <div>
      {/* <ListItem1/> */}
      <ListItem1 dataAppFake={(dataProp) => setData(dataProp)}/>
      <ListItem3 dataProperty={data}/>
      
      {/* <span>{data}</span> */}
    </div>
  );
};

export default AppFake;
