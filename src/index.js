// Import necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// Replace ReactDOM.render with ReactDOM.createRoot
const root = document.getElementById('root') || document.createElement('div');
const reactRoot = createRoot(root);

// Use reactRoot.render to render your app
reactRoot.render(<App />);
