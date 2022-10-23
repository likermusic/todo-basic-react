import React from "react";

const SearchPanel = ( {onSearch} ) => {
  return (
    <input
      type='text'
      placeholder='Type to search'
      className='form-control search-input'
      onChange={(e)=>onSearch(e.target.value)}
    />
  );
};

export default SearchPanel;
