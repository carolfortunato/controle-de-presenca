import React from 'react';
import './select.css';

const Select = (props) => {
  const { id, name, label, value, onChange, options, defaultValue, className } = props;

  return (
    <div className={`select ${className || ''}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {defaultValue !== undefined && (
          <option value="" disabled hidden>{defaultValue}</option>
        )}
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;