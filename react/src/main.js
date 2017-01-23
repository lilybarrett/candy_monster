import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  if (document.getElementById('main-list')) {
    ReactDOM.render(
      <h2>This is the index page which will have a form on it</h2>,
      document.getElementById('main-list')
    );
  };
  if (document.getElementById('show-page')) {
    ReactDOM.render(
      <h2>This is the show page</h2>,
      document.getElementById('show-page')
    );
  }
});
