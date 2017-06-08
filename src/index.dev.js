
import './style/main.scss';
import './grammar.dat';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './component/app';

const $root = document.getElementById('root');
const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    $root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./component/app', () => {
    const NewApp = require('./component/app').default;
    render(NewApp);
  });
}
