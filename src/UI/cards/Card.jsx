import React from 'react';

import './cards.css';

const Card = props => {
  return (
    <div className='card'>{props.children}</div>
  );
};

export default Card