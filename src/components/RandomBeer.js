import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

const startingState = {
    image_url: null,
    name: null,
    tagline: null,
    first_brewed: null,
    attenuation_level: 0,
    description: null
}

function RandomBeer(){
    const [beerState, setBeerState]= useState(startingState)

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res =>{
            console.log(res)
            const beer = res.data
            const randomBeer = beer[(Math.floor(Math.random() * (beer.length -1)))];
            setBeerState(randomBeer)
        })
    }, [])

    return(
    <div>
        <Navbar />
        <img src={beerState.image_url} alt="Beer Img" />
        <h4>{beerState.name}</h4>
        <p>{beerState.tagline}</p>
        <p>{beerState.first_brewed}</p>
        <p>{beerState.attenuation_level}</p>
        <p>{beerState.description}</p>
        <Link to={'/beers'}>Back to all Beers</Link>
    </div>
    )
}


export default RandomBeer;