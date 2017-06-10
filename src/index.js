
import './style/main.scss';
import './static/grammar.dat';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

const $root = document.getElementById('root');

ReactDOM.render(<App/>, $root);
