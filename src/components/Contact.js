import React from 'react'
import call2 from '../assets/call2.png'
import mail from '../assets/mail.png'
import messenger from '../assets/messenger.png'
import whats from '../assets/whats.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contacts2'>
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
          <div className='writing'>
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
  )
}

export default Contact