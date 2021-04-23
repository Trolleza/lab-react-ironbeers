import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AllBeers from './AllBeers'
import OnlyBeer from './OnlyBeer'
import RandomBeer from './RandomBeer';

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/beers' component={AllBeers} />
    <Route exact path="/beers/:id" component={OnlyBeer} />
    <Route exact path="/beers/random-beer" component={RandomBeer} />

    </BrowserRouter>
  );
}

export default App;
