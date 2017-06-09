
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  render() {
    return (
      <a className={ 'button ' + (this.props.className || '') } href="#"
         onClick={ this.props.onClick }>
        { this.props.text }
      </a>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
