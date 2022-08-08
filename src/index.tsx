import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.sass';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux'
import {BrowserRouter } from "react-router-dom"; 
import ThemeProvider from './provider/themeProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

);

