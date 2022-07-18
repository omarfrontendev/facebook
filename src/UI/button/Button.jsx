import React from 'react'

import './button.css';

const Button = props => {
  return (
    <button type={props.type || 'button'} className='main_btn' onClick={() => props.onClick}>
      {props.children}
    </button>
  )
}

export default Button