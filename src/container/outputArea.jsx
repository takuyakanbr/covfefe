
import React from 'react';
import { connect } from 'react-redux';

import TextOutput from '../component/textOutput';

const mapStateToProps = (state) => ({
  texts: state.output
});

let OutputArea = ({ texts }) => {
  if (texts.length === 0) {
    return (
      <div className="output-area">
        <div className="output-none">covfefe</div>
      </div>
    );
  }

  const items = texts.map((text, index) => (
    <TextOutput key={ index } text={ text } />
  ));
  return (
    <div className="output-area">{ items }</div>
  );
};

OutputArea = connect(mapStateToProps)(OutputArea);

export default OutputArea;
