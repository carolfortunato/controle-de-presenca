import React from 'react';
import './card.css';

const Card = (props) => {
  const { children, className, title } = props;

  return (
    <div className={`card ${className || ''}`}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-body">
        {children} {/* Conteúdo dinâmico do card */}
      </div>
    </div>
  );
};

export default Card;