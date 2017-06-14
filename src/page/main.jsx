
import React from 'react';

import BasePage from './base';
import OutputArea from '../container/outputArea';
import Toolbar from '../component/toolbar';

const MainPage = () => (
  <BasePage>
    <Toolbar />
    <OutputArea />
    <div className="align-right">
      <span className="huge-text">&rdquo;</span>
    </div>
  </BasePage>
);

export default MainPage;
