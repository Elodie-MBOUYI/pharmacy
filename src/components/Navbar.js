import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import logoPh from '../assets/logoPh.png'
import {Link}  from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState()
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logoPh} alt='logo'/>
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{color:'#04A118'}} />) 
                : (<FaBars size={30} style={{color:'#04A118'}} />)}
                
            </div>
        <ul className= {click ? "nav-menu active" : "nav-menu "}>
                <li className='nav-item'>
                    <a href='/'> Accueil</a>
                </li>
                <li className='nav-item'>
                    <Link to="/pharmacies">Pharmacies</Link>
                </li>
                <li className='nav-item'>
                <Link to="/degarde">Pharmacie de Garde</Link>
                </li>
                <li className='nav-item'>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar