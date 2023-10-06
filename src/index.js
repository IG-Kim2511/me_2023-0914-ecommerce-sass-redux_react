import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchState';
import { FilterProvider } from './context/FilterContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FilterProvider>
        <SearchProvider>      
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </SearchProvider>
      </FilterProvider>
    </Provider>
  </React.StrictMode>
);

