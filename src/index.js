import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App title="Hello world 2.0!"/>
   {/* {App({title: "Hello world 2.0!"})} */}
  </React.StrictMode>
);