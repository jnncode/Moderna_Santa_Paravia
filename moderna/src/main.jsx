import React from 'react';
import ReactDOM from 'react-dom/client';

import { GameDataProvider } from './context/GameDataContext.jsx';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameDataProvider>
      <App />
    </GameDataProvider>
  </React.StrictMode>
);