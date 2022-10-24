import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';

import NavbarComponent from './components/Navbar/NavbarComponent';
import { GetName } from './components/inputName/GetName';
import { Main } from './components/Main/Main';
import { UpdateArc } from './components/AddArc/UpdateArc';
import { AddNewArc } from './components/AddArc/AddNewArc';
import { NotFound } from './components/NotFound/NotFound';
import FooterComponent from './components/Footer/FooterComponent';

ReactDOM.render(
  <BrowserRouter>
    {/* <React.Fragment> */}
    <Provider store={store}>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact component={GetName} />
        <Route path="/getname" component={GetName} />
        <Route path="/arclanguage" component={Main} />
        <Route path="/editarclan/arcId=:arcId" component={UpdateArc} />
        <Route path="/addarc" component={AddNewArc} />
        <Route component={NotFound} />
      </Routes>
      <FooterComponent />
    </Provider>
    {/* </React.Fragment> */}
  </BrowserRouter>,
  document.getElementById('root')
);
