import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ListBeers(){
    const [listBeers, setListBeers] = useState([])

    useEffect(()=>{
        axios.get()
        .then((data) =>{
            console.log('axios full response data', data)
            const listOfAllBeers = data
            setListBeers(listOfAllBeers)
        })
        .catch(err => console.log(err), [listBeers])
    })
    
    return(
        <div>
            {listBeers.map(oneBeer =>{
                return(
                    <div key={oneBeer._id}>
                        <img src={oneBeer.image_url} alt="" />
                        <Link to={`/beers/${oneBeer._id}`}>{oneBeer.name}</Link>
                    </div>
                )
            })}
    
        </div>

    )
}

export default ListBeers;
