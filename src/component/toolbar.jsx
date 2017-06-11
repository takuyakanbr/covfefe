
import React from 'react';

import GenerateButton from '../container/generateButton';
import OptionsButton from '../container/optionsButton';
import OptionsArea from '../container/optionsArea';

const Toolbar = () => (
  <div className="toolbar">
    <div className="toolbar-controls">
      <div className="toolbar-text">
        <span className="huge">&ldquo;</span>Despite the constant negative press...
      </div>
      <div className="toolbar-buttons">
        <GenerateButton/>
        <OptionsButton/>
      </div>
    </div>
    <OptionsArea/>
  </div>
);

export default Toolbar;
