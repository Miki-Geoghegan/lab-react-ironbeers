import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from './NavBar';

function ListBeers(){
    const [listBeers, setListBeers] = useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) =>{
            console.log('axios full response data', res)
            const listOfAllBeers = res.data
            setListBeers(listOfAllBeers)
        })
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div>
            <Navbar />
            {listBeers.map(oneBeer =>{
                return(
                    <div key={oneBeer._id}>
                        <img src={oneBeer.image_url} alt="Beer" />
                        <Link to={`/beers/${oneBeer._id}`}>{oneBeer.name}</Link>
                        <h4>{oneBeer.tagline}</h4>
                    </div>
                )
            })}
    
        </div>

    )
}

export default ListBeers;
