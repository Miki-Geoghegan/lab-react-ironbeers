import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <HomePage />
      <Switch>
        <Route path='' />

      </Switch>

      
      
      </BrowserRouter>


    </div>
  );
}

export default App;
