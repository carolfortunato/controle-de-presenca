import React from 'react';
import './card.css';

const Card = (props) => {
  const { children, className, tittle } = props;

  return (
    <div className={`card ${className || ''}`}>
      {tittle && <h2 className="card-title">{tittle}</h2>}
      <div className="card-body">
        {children} {}
      </div>
    </div>
  );
};

export default Card;