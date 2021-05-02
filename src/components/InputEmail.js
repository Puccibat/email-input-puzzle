import React from 'react';

const InputEmail = ({ handleChange, inputValue }) => {
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        placeholder='Adresse email'
        onChange={handleChange}
      />
    </div>
  );
};

export default InputEmail;
