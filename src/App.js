import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ListBeers from './components/ListBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import HomePage from './components/HomePage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/new-beer' component={NewBeer}/>
        <Route exact path='/random-beer' component={RandomBeer}/>
        <Route exact path='/beers/:beerId' component ={SingleBeer}/>      
        <Route exact path='/beers' component={ListBeers}/>
        <Route exact path ='/' component={HomePage}/>
      </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
