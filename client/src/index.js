import React from 'react';
import App from './App';
import "./styles.css"

// Import createRoot from 'react-dom/client' instead of 'react-dom'
import { createRoot } from 'react-dom/client';

// Use createRoot to create a root instance
const root = createRoot(document.getElementById('root'));

// Use root.render to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
