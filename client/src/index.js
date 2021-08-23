import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

//STORE -> Globalized State

//ACTION ->
const increment = () => {
  return { type: 'INCREMENT' };
};
const decremnt = () => {
  return { type: 'DECREMENT' };
};

//REDUCER ->
const counter = (state = 0, action) => {};

//DISPATCH ->
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
