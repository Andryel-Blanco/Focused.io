import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './public/pages/Home/index';
import Teste from './public/pages/teste/index';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    {/* <Teste/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
