
import React from 'react';
import { connect } from 'react-redux';

import OptionsCheckbox from './optionsCheckbox';

const mapStateToProps = (state) => ({
  showOptions: state.showOptions
});

let OptionsArea = ({ showOptions }) => (
  <div className={ 'clearfix toolbar__options ' +
    ('toolbar__options--' + (showOptions ? 'show' : 'hide')) }>
    <div className="l-padded">
      <OptionsCheckbox name="generated" text="Generated words"/>
      <OptionsCheckbox name="combined" text="Combined words" />
      <OptionsCheckbox name="markov" text="Markov generator" />
      <OptionsCheckbox name="covfefe" text="More covfefe"/>
      <OptionsCheckbox name="numbers" text="Append numbers"/>
    </div>
  </div>
);

OptionsArea = connect(mapStateToProps, null)(OptionsArea);

export default OptionsArea;
