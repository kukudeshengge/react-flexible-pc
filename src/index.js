import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {init} from 'lib-flexible-for-dashboard';
init(16 / 9);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

