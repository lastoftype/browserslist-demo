import React from 'react';
import { render } from 'react-dom';
import './style.scss';

import App from './components/App';

render(
  <div className="App">
  	<App />
  </div>,
  document.getElementById('app')
);

module.hot.accept();