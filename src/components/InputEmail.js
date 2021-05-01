import React from 'react';

const InputEmail = ({ handleChange }) => {
  return (
    <div>
      <input type='text' placeholder='Adresse email' onChange={handleChange} />
    </div>
  );
};

export default InputEmail;
