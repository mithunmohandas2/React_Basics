import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EnhancedCounter from './samples/EnhancedCounter';
import Forms from './samples/Forms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <EnhancedCounter/>
    <Forms />

  </React.StrictMode>
);


