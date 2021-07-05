import React from 'react';
import './Button.css';

function Button({ variant = "primary", children, ...rest }) {

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;