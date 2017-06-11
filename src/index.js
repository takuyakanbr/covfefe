
import './util/polyfill';
import './style/main.scss';
import './static/grammar.dat';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './component/app';
import reducer, { initialize } from './reducer/index';

const $root = document.getElementById('root');
const store = createStore(reducer);
initialize(store.dispatch);

ReactDOM.render((
  <Provider store={ store }>
    <App/>
  </Provider>
), $root);
