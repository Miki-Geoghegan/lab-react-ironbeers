import React from 'react'
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function HomePage(){
    return(
        <div>
            <div>
                <img src={beers} alt="Beers" />
                <Link to='/beers'>All Beers</Link>
            </div>
            <div>
                <img src={randomBeer} alt="Random Beer" />
                <Link to='/random-beer'>Random Beer</Link>
            </div>
            <div>
                <img src={newBeer} alt="New Beer" />
                <Link to='/new-beer'>New Beer</Link>
            </div>
        </div>
    )
}

export default HomePage;