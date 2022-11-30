import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FlightContextProvider from './context/FlightContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FlightContextProvider>

    <App />

  </FlightContextProvider>,
);
