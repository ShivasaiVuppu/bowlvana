import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

/**
 * Entry point.
 * Bowlvana is a single-page site using anchor navigation.
 * BrowserRouter is intentionally omitted — no routes are needed.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
