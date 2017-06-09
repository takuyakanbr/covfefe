
import React from 'react';
import PropTypes from 'prop-types';

class TextOutput extends React.Component {

  render() {
    return (
      <div className="output">
        { this.props.text }
      </div>
    );
  }
}

TextOutput.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextOutput;
