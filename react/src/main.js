import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CandyList from './components/CandyList';
import CounterButton from './components/CounterButton';
import candies from './data/candies';

$(function() {
  if (document.getElementById('main-list')) {
    ReactDOM.render(
      <CandyList />,
      document.getElementById('main-list')
    );
  };
});

$(function() {
  if (document.getElementById('counter-button')) {
    ReactDOM.render(
      <CounterButton/>,
      document.getElementById('counter-button')
    );
  }
});
