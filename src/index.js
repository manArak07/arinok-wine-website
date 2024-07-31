import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/home';
import NewsCtg from './components/pages/home/news/ctg';

const routes = [
  {path: '/', Component: Home, withLayout: true},
  {path: '/news/:ctg', Component: NewsCtg, withLayout: true},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App routes={routes}/>
  </BrowserRouter>
);

reportWebVitals();
