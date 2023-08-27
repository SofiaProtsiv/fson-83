import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RootContext } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <RootContext>
    <App />
  </RootContext>
</BrowserRouter>);