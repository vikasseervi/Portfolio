import './Navbar.css'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Navbar() {

    const [id, setId] = useState('home'); 

    return(
        <div id='' className='navbar navbar-slide-slidedown'>
            <h1 className='navbar-logo'>Vikas</h1>            
            <ul className="nav-menu">
                <li> <AnchorLink className='anchor-link' href="#home"> Home </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#about"> About Me </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#technologies"> Technologies</AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#projects"> Projects </AnchorLink></li>
                <li> <AnchorLink className='anchor-link' href="#contact"> Contact </AnchorLink></li>
            </ul>
            <div className="nav-connect"> <AnchorLink className='anchor-link' href="#contact"> Connect With Me </AnchorLink></div>
        </div>
    )
}