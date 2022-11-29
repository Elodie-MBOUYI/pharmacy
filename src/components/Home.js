import React from 'react'
import call1  from '../assets/call1.png'
import call2 from '../assets/call2.png'
import mail from '../assets/mail.png'
import messenger from '../assets/messenger.png'
import whats from '../assets/whats.png'
import {Link}  from 'react-router-dom'
import './Home.css'


function Home () {
 
  return (
    <div className='home'>
        <div className='content'>
            <p>A Port-Gentil...</p>
            <p>Avec l'application Médic'App</p>
            <p>Consulter,commander et acheter </p>
            <p>Connaître la pharmacie de garde</p>
            <button className='button'><Link to="/degarde">Pharmacie  de Garde</Link></button>
        </div>
        <div className='pharmacies'>
          <h2>Vos pharmacies</h2>
          <span className="linero"></span>
          <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !</p>
          <div className='nosphcies'>
            <div className='nosphcies1'>
              <button><Link to="/pharms">Pharmacie Centrale</Link></button>
            </div>
            <div className='deux'> 
              <div className='nosphcies2'>
              <button><Link to="/banco">Pharmacie Banco</Link></button>
              </div>
              <div className='nosphcies3'>
                <div className='andrea'>
                  <button><Link to="/pharms">Pharmacie ANDREA</Link></button>
                </div>
                <div className='radoca'>
                <button><Link to="/pharms">Pharmacie RADOCA</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <button ><Link to="/banco">Pharmacie  Banco</Link></button>
                <img className='call2'src={call1} alt='logo'/>
                <span>01.55.10.72</span>
                <button ><Link to="/pharms">Pharmacie  Centrale</Link></button> 
              </div>
          </div>

        </div>
        <div className='contacts'>
          <div className='about'>
            <h5>A propos</h5>
            <p>MEDIC'APP est une applcation web et web mobile qui se veut une plateforme regroupant l'ensemble des pharmacies de notre ville.</p>

          </div>
          <div className='link'>
            <h5>Entrer en contact</h5>
            <img className='all1' src={call2}  alt='logo'/> 
            <h6 className='link1'>074.62.38.01</h6>
            <img className='all2' src={whats}  alt='logo'/> 
            <h6 className='link2'>04.62.38.01</h6>
            <img className='all3' src={messenger}  alt='logo'/> 
            <h6 className='link3'>Elodie MBOUYI</h6>
            <img className='all4' src={mail}  alt='logo'/> 
            <h6 className='link4'>elodiembouyi@gmail.com</h6>
            <p>Copyright&copy;Médic'App 2022-Elodie MBOUYI</p>
          </div>
          <div className='write'>
              <h5>Entrer en contact</h5>
              <form className='form'
              action="https://formspree.io/f/xyyvadyk"method="POST">
              <label>
                <input type="email" name="email" placeholder='Votre Email'></input>
              </label>
              <label>
                <textarea name="message" placeholder='Votre messsage'></textarea>
              </label>
  
              <button type="submit">Envoyer</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Home