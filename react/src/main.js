import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CandyListContainer from './containers/CandyListContainer';
import CounterButtonContainer from './containers/CounterButtonContainer';

$(function() {
  if (document.getElementById('main-list')) {
    ReactDOM.render(
      <CandyListContainer />,
      document.getElementById('main-list')
    );
  };
  if (document.getElementById('counter-button')) {
    ReactDOM.render(
      <CounterButtonContainer />,
      document.getElementById('counter-button')
    );
  }
});
