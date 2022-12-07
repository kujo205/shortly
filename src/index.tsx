import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UrlContextProvider from './components/UrlContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UrlContextProvider>
    <App />
    </UrlContextProvider>
  </React.StrictMode>
);

