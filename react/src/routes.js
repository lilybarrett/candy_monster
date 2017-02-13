import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CandyListContainer from './containers/CandyListContainer';
import CandyListItem from './components/CandyListItem';
import Layout from './components/Layout';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={CandyListContainer} />
    <Route path="/candies/:id" component={CandyListItem} />
  </Route>
);

export default routes;
