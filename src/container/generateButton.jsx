
import React from 'react';
import { connect } from 'react-redux';

import Button from '../component/button';
import { generate } from '../action/index';


let GenerateButton = ({ dispatch }) => (
  <Button
    className="btn-generate"
    text="Generate"
    onClick={ () => dispatch(generate()) }
  />
);

GenerateButton = connect()(GenerateButton);

export default GenerateButton;
