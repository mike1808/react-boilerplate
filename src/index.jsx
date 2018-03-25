import 'whatwg-fetch';
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './resources/styles.css';

import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));
