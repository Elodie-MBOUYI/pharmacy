import React from 'react'
import call1  from '../assets/call1.png'
import {Link}  from 'react-router-dom'
import './Degarde.css'

const Degarde = () => {
  return (
    <div className='garde'>
       
          <h2>Pharmacies de Garde</h2>
          <span className="lineroo"></span>
          <div className='degarde'>
              <div className='degarde1'></div>
              <div className='degarde2'>
                <h5>Période du 05 au 11 Décembre 2022</h5>
                <p>Pour tout vos besoins en services pharmaceutiques n'hésitez pas à nous contactez !</p>
                <img className='call1' src={call1}  alt='logo'/>
                <span>(+241)74.53.38.42</span>
                <button ><Link to="/">Pharmacie  Banco</Link></button>
                <img className='call2'src={call1} alt='logo'/>
                <span>01.55.10.72</span>
                <button ><Link to="/pharms">Pharmacie  Centrale</Link></button> 
              </div>
          </div>
    </div>
  )
}

export default Degarde