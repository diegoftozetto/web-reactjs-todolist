import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/Menu';
import './styles/global-styles.css';
import { Home } from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Menu />
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
