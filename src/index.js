import React from 'react'
 import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
 import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>

  </Provider>
  </BrowserRouter>
)
  


reportWebVitals();