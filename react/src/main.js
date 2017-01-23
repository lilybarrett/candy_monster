import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CandyList from './components/CandyList';
import Candy from './components/Candy';
import candies from './data/candies';

$(function() {
  if (document.getElementById('main-list')) {
    ReactDOM.render(
      <CandyList candies={candies}/>,
      document.getElementById('main-list')
    );
  };
});

$(function() {
  if (document.getElementById('show-page')) {
    ReactDOM.render(
      <Candy candies={candies}/>,
      document.getElementById('show-page')
    );
  }
});
