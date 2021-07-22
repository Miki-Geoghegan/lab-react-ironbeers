import React, {useState} from 'react'
import axios from 'axios'

const initialBeerState = {image_url: '',
name: '',
tagline: '',
first_brewed: '',
attenuation_level: 0,
description: '' }

function AddBeer(props){
    const {pushBeer} = props
    const [beerState, setBeerState] = useState(initialBeerState)
    
    
    function handleChange (event) {  
        const {name, value} = event.target;
        setBeerState({...beerState, [name]: value});
    }
    

    function handleFormSubmit(event){
        event.preventDefault()
        const {image_url, name, tagline, first_brewed, attenuation_level, description} = beerState

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {image_url, name, tagline, first_brewed, attenuation_level, description}) 
        .then(createdBeer => {
            console.log(createdBeer)
/*             pushBeer(
                {
                image_url,
                name,
                tagline,
                first_brewed,
                attenuation_level,
                description

                }
            ) */
            setBeerState(initialBeerState)
        })
        .catch(err => console.log(err))
    }



    return(
    <div>
        <form onSubmit={handleFormSubmit}>
          <label>Image:</label>
          <input type="text" name="image_url" value={beerState.image_url} onChange={ e => handleChange(e)}/>
          <label>Name:</label>
          <input type="text" name="name" value={beerState.name} onChange={ e => handleChange(e)}/>
          <label>Tagline:</label>
          <input type="text" name="tagline" value={beerState.tagline} onChange={ e => handleChange(e)}/>
          <label>First Brewed:</label>
          <input type="text" name="first_brewed" value={beerState.first_brewed} onChange={ e => handleChange(e)}/>
          <label>Attenuation Level:</label>
          <input type="number" name="attenuation_level" value={beerState.attenuation_level} onChange={ e => handleChange(e)}/>
          <label>Description:</label>
          <textarea name="description" value={beerState.description} onChange={ e => handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
    </div>


    )

}

export default AddBeer;