import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Pokemons from '../pages/Pokemons';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemons/:page" component={Pokemons} />
    <Route path="/pokemons/:pokemon+" exact component={Details} />
  </Switch>
);

export default Routes;
