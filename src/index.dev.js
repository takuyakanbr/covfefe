
import './style/main.scss';
import './static/grammar.dat';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './component/app';
import reducer, { initialize } from './reducer/index';

const $root = document.getElementById('root');
const store = createStore(reducer);
initialize(store.dispatch);

const render = App => {
  ReactDOM.render(
    <Provider store={ store }>
      <AppContainer>
        <App/>
      </AppContainer>
    </Provider>,
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
