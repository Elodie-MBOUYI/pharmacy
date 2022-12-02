import React from 'react'
import localisation  from '../assets/localisation.png'
import call1  from '../assets/call1.png'
import lhorloge  from '../assets/lhorloge.png'
import facebook from '../assets/facebook.png'
import './Pharms.css'
import {Link}  from 'react-router-dom'



function Pharms () {
    
  return (
    <div className='tout'>
        <h2>Bienvenus à la Pharmacie Centrale</h2>
        <span className="liner"></span>
        <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !
            <br></br>Cliquez sur la rubrique correspondant à votre besoin!
        </p>
        
        <div className='categories'>
            <div className='cat1'>
                <button className='cat0'><Link to="/rubriquec">Douleur et fièvre</Link></button>
            </div>
            <div className='cat2'>
            <button className='cat0'><Link to="/rubriquec">Rhume grippe ORL</Link></button>
            </div>
            <div className='cat3'>
             <button className='cat0'><Link to="/rubriquec">Alimentation</Link></button>
            </div>
            <div className='cat4'>
                <button className='cat0'><Link to="/rubriquec">Pansement</Link></button>
            </div>
        </div>
        <div className='contkt'>
          <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !
          <br></br>N'hésitez pas à nous joindre !
          </p>
          <div className='coord'>
            <div className='coord1'>
            <div className='cod6'>
                  <img className='localisation' src={localisation} alt='logo'/>
                  <h6>Adresse</h6>
                  <p>Rue de Gouverneur Bernard Port-Gentil,BP 640</p>
                </div>
                <div className='cod7'>
                  <img className='telephone' src={call1} alt='logo'/>
                  <h6>Téléphone</h6>
                  <p>01.55.21.64</p>
                </div>
                <div className='cod8'>
                  <img className='lhorloge' src={lhorloge} alt='logo'/>
                  <h6>Horaires habituelles</h6>
                  <p>Du Lundi au samedi de 7h00 à 20h00 <br></br>Dimanche fermé</p>
                </div>
                <div className='cod9'>
                  <h5>Réseaux sociaux</h5>
                  <img className='facebook' src={facebook} alt='logo'/>
                  <p>Pharmacie Centrale,Port-Gentil,GABON</p>
                </div>
            </div>
            <div className='coord2'>
              <h2>Contactez-nous</h2>
              <form className='formthree'
                  action="https://formspree.io/f/mdojvwop"
                  method="POST"
                >
                  <label>
                    <input type="text" name="name" placeholder='Votre nom'></input>
                  </label>
                  <label>
                    <input type="number" name="phone" placeholder='Votre téléphone'></input>
                  </label>
                  <label>
                    <input type="text" name="name"  placeholder='Objet'></input>
                  </label>
                  <label>
                    <textarea name="message" placeholder='Votre message'></textarea>
                  </label>
                
                  <button type="submit">Envoyer</button>
                </form>
            </div>
          </div>
          <h6 className='notes1'>Notre société recueille vos données afin de traiter votre demande de contact.Les données requises sont nécessaires pour en assurer le suivi et <br></br>
        sont réservées à l'usage exclusif de notre société.Elles ne seront en aucun cas communiquées à des tiers.<br></br>
        Conformément à la loi informatique et libertés, vous bénéficiez d'un droit d'accès, de modification,de rectification et de suppression des données vous concernant.<br></br>
        Vous seul pouvez exercer ces droits sur vos propres données en vous adressant à <strong>Pharmacie Centrale-Rue de Gouverneur Bernard Port-Gentil-BP 640</strong></h6>  
        </div>
    </div>
  )
}

export default Pharms