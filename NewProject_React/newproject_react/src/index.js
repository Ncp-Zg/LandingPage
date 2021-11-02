import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css"
import Router from './Router';
import AxiosTutorial from './Components/AxiosTutorial';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
