import React from 'react'
import { Link } from 'react-router-dom';

function HomePage(){
    return(
        <div>
            <div>
                <img src="../assets/beers" alt="Beers" />
                <Link to='/beers'>All Beers</Link>
            </div>
            <div>
                <img src="../assets/random-beer" alt="Random Beer" />
                <Link to='/random-beer'>Random Beer</Link>
            </div>
            <div>
                <img src="../assets/new-beer" alt="New Beer" />
                <Link to='/new-beer'>New Beer</Link>
            </div>
        </div>
    )
}

export default HomePage;