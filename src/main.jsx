// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesProvider>
      <SearchProvider> {/* 2. Wrap the App with SearchProvider */}
        <App />
      </SearchProvider>
    </FavoritesProvider>
  </React.StrictMode>
);