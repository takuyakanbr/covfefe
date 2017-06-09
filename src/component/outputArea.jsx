
import React from 'react';
import PropTypes from 'prop-types';
import TextOutput from './textOutput';

class OutputArea extends React.Component {
  render() {
    if (this.props.texts.length === 0) {
      return (
        <div className="output-area">
          <div className="output-none">covfefe</div>
        </div>
      );
    }

    const items = this.props.texts.map((text, index) => (
      <TextOutput key={ index } text={ text } />
    ));
    return (
      <div className="output-area">{ items }</div>
    );
  }
}

OutputArea.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default OutputArea;
