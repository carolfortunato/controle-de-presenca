import React from 'react';
import './input.css';

const Input = (props) => {
  const { label, error, ...rest } = props;

  return (
    <div className='input'>
      {label && <label htmlFor={rest.id || rest.name}>{label}</label>}
      <input {...rest} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;