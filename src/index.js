import React from 'react';
import {  render }from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './scenes/routes';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft,faAngleRight, faFilm } from '@fortawesome/free-solid-svg-icons'
library.add( faAngleLeft,faAngleRight,faFilm )

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
