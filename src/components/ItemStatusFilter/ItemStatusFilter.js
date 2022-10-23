import React, { useState } from "react";

const ItemStatusFilter = ( {onFilter, filter} ) => {
  const data = [
    {
      label: 'all',
      text: 'All',
    }, 
    {
      label: 'active',
      text: 'Active'
    }, 
    {
      label: 'done',
      text: 'Done'
    }
  ];

  // let [filter, setFilter] = useState(data[0].label); // filter = 'all'`

  const markup = data.map( (item,ind) => {
    let clazz = 'btn';
    if (item.label == filter) {
      clazz += ' btn-info';
    } else {
      clazz += ' btn-outline-secondary';
    }
    return (
      <button key={item.label} onClick={() => onFilter(item.label)} type="button" className={clazz}>{item.text}</button>
    )
  });
  return (
    <div className="btn-group">
      {markup}
    </div>
  )
}

export default ItemStatusFilter;
