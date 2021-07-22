import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from './NavBar';
import NewBeer from './NewBeer'

function ListBeers(){
    const [listBeers, setListBeers] = useState([])
    const [showOrHideForm, setShowOrHideForm] = useState(false);
    

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) =>{
            console.log('axios full response data', res)
            const listOfAllBeers = res.data
            setListBeers(listOfAllBeers)
        })
        .catch(err => console.log(err))
    }, [])

    const showForm = () => {
		setShowOrHideForm(!showOrHideForm);
	};

    const pushBeer = (beer) => {

		const ListBeersCopy = [...ListBeers];
		
		ListBeersCopy.unshift(beer);
		
		setListBeers(ListBeersCopy);
		
		setShowOrHideForm(false);
	};

    
    return(
        <div>
            <Navbar />
            <h2>All Beers</h2>
            <h4>Add Beer</h4>
            <button className='button is-info' onClick={showForm}>Add New Beer</button>
            {showOrHideForm && <NewBeer pushBeer={pushBeer} />}
            {/* <Link to='/new-beer' onClick={showForm}>Add New Beer</Link> */}
            {/* <button className='button is-info' onClick={showForm}>Add New Beer</button> */}
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
