import call1  from '../assets/call1.png'
import {Link}  from 'react-router-dom'
import './Degarde.css'



const Degarde = () => {

  return (
    <div className='gard'>
          <h2>Pharmacies de Garde</h2>
          <span className="lin"></span>
          <div className='degard'>
              <div className='degard1'></div>
              <div className='degard2'>
                <h5>Période du 05 au 11 Décembre 2022</h5>
                <p>Pour tout vos besoins en services pharmaceutiques <br></br> N'hésitez pas à nous contactez !</p>
                <img className='callun' src={call1}  alt='logo'/>
                <span className='spanun'>(+241)74.53.38.42</span>
                <button className='gard1' ><Link to="/banco">Pharmacie  Banco</Link></button>
                <img className='calldeux'src={call1} alt='logo'/>
                <span className='spandeux'>01.55.10.72</span>
                <button className='gard2' ><Link to="/pharms">Pharmacie  Centrale</Link></button> 
              </div>
          </div>
          
    </div>
  )
}

export default Degarde