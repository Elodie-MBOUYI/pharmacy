import {Link}  from 'react-router-dom'
import './Pharmacies.css'
import React from "react";


const Pharmacies = () => {

  


 return(
          
    <div className='pharmacy'>
    <h2>Vos pharmacies</h2>
    <span className="linero2"></span>
    <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !</p>
    <div className='nophcies'>
      <div className='nophcies1'>
        <button><Link to="/pharms">Pharmacie Centrale</Link></button>
        
      </div>
      <div className='deux'> 
        <div className='nophcies2'>
        <button><Link to="/banco">Pharmacie Banco</Link></button>
        </div>
        <div className='nophcies3'>
          <div className='andrea'>
            <button><Link to="/pharms">Pharmacie ANDREA</Link></button>
          </div>
          <div className='radoca'>
          <button><Link to="/pharms">Pharmacie RADOCA</Link></button>
          </div>
        </div>
      </div>
    </div>
  </div>)}
  
  


export default Pharmacies