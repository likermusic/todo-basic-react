import React from "react";

const SearchPanel = () => {
  console.log("SearchPanel");
  return (
    <input
      type='text'
      placeholder='Type to search'
      className='form-control search-input'
    />
  );
};

export default SearchPanel;
