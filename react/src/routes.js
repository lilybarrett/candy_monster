import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CandyListContainer from './containers/CandyListContainer';
import CandyShowContainer from './containers/CandyShowContainer';
import Layout from './components/Layout';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={CandyListContainer} />
    <Route path="candies/:id" component={CandyShowContainer} />
  </Route>
);

export default routes;
