import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.jsx';
import './index.css';

// Mount the portfolio with React's development checks enabled.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);