
import React from 'react';
import PropTypes from 'prop-types';

class TextOutput extends React.Component {

  render() {
    return (
      <div className="output">
        <p>{ this.props.text }</p>
      </div>
    );
  }
}

TextOutput.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextOutput;
