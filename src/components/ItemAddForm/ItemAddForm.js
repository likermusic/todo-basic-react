import React, { useState } from "react";

const ItemAddForm = ({ onAddTask }) => {
  let [text, setText] = useState("");
  // console.log(text);

  const addTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form
      className='item-add-form d-flex'
      onSubmit={(e) => {
        e.preventDefault();
        onAddTask(text);
        setText('');
        // console.log('Text='+text);
      }}
      >
      <input
        id="text-field"
        type='text'
        className='form-control'
        placeholder='What needs to be done'
        onChange={addTextHandler}
        value={text}
      />
      <button type="submit" className='btn btn-outline-secondary col-3'>
        Add Item
      </button>
    </form>
  );
};

export default ItemAddForm;
