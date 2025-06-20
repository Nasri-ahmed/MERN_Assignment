import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import StoreProvider from './StoreContext.jsx';
import './style.css';

createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </StoreProvider>
);
