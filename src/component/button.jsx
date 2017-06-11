
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => (
  <a className={ 'button ' + (className || '') } href="#"
     onClick={ e => {
       e.preventDefault();
       onClick();
     }}>
    { text }
  </a>
);

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
