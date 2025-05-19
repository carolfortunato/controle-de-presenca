import React from 'react';
import './buttonRegister.css';

const ButtonRegister = (props) => {

  const { titulo, onClick, colorBackground, colorText, type } = props;
  const textColorStyle = {
    backgroundColor: colorBackground || '#D9D9D9',
    color: colorText|| '#000000',

  };

  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`buttonRegister`}
      style={textColorStyle} 
    >
      {titulo}
    </button>
  );
};

export default ButtonRegister;