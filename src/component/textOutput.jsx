
import React from 'react';
import PropTypes from 'prop-types';

const TextOutput = ({ text }) => (
  <div className="output">{ text }</div>
);

TextOutput.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextOutput;
