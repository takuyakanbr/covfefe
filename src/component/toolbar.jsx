
import React from 'react';

import GenerateButton from '../container/generateButton';
import OptionsButton from '../container/optionsButton';
import OptionsArea from '../container/optionsArea';

const Toolbar = () => (
  <div className="toolbar">
    <div className="toolbar__controls">
      <div className="toolbar__text">
        <span className="huge-text">&ldquo;</span>Despite the constant negative press...
      </div>
      <div className="toolbar__buttons">
        <GenerateButton/>
        <OptionsButton/>
      </div>
    </div>
    <OptionsArea/>
  </div>
);

export default Toolbar;
