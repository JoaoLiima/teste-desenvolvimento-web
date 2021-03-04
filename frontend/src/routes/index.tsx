import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Pokemons from '../pages/Pokemons';
import Details from '../pages/Details';
import CreatePokemon from '../pages/Create';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/pokemons/page/:page+" exact component={Pokemons} />
    <Route path="/create-pokemon/" exact component={CreatePokemon} />
    <Route path="/pokemons/:pokemon+" exact component={Details} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
