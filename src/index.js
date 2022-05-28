import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes';
import Navigation from './components/templates/Navigation';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App px-4 md:px-12 lg:px-24 xl:px-32">
      <BrowserRouter>
        <Navigation />
        <AppRoute />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
