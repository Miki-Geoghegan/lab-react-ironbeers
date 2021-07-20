import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../assets/home-img.png'

function Navbar(){
    return(
        <nav>
                <Link to="/"><img src={homeImg} alt="" /></Link>
        </nav>
    )
}

export default Navbar;