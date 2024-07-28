import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/home';

const routes = [
  {path: '/', Component: Home, withLayout: true},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App routes={routes}/>

  </BrowserRouter>
);

reportWebVitals();
