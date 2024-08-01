import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/pages/home';
import NewsCtg from './components/pages/home/news/ctg';
import ThemeProvider from './providers/theme';
const routes = [
  { path: '/', Component: Home, withLayout: true },
  { path: '/news/:ctg', Component: NewsCtg, withLayout: true },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>

    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
