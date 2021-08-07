import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  store  from  "../src/redux/store"
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
