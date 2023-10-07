import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { FilterProvider } from './context/FilterContext';
import { SearchProvider } from './context/SearchContext';
import { SearchProvider2 } from './--test,trash-/search/SearchContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
      <SearchProvider2>
      <SearchProvider>      
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </SearchProvider>
      </SearchProvider2>
      </FilterProvider>
    </Provider>
  </React.StrictMode>
);

