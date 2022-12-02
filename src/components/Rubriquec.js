import React  from 'react';
import call1  from '../assets/call1.png'
import localisation from '../assets/localisation.png'
import lhorloge from '../assets/lhorloge.png'
import facebook from '../assets/facebook.png'
import doliprane from '../assets/doliprane.jpg'
import advil from '../assets/advil.jpg'
import tramadol from '../assets/tramadol.jpg'
import './Rubriquec.css'


export default function MediaCard() {
  return (
    <div className='fievre'>
      <h2>Douleurs et Fièvre</h2>
      <span className="ligne"></span>
    <div className='cards'>
      <div className='cards1'>
        <div className='cards11'>
                <img className='doliprane' src={doliprane} alt='logo'/>
        </div>
        <div className='cards12'>
          <h5>Propriétés</h5>
          <h6>Description</h6>
          <p>Prix:</p>
        </div>
        <div className='fever'>
          <img className='advil' src={advil} alt='logo'/>
          <h5>Propriétés</h5>
          <h6>Description</h6>
          <p>Description</p>
        </div>
        <div className='fever'>
            <img className='tramadol' src={tramadol} alt='logo'/>
            <h5>Propriétés</h5>
            <h6>Description</h6>
            <p>Description</p>
        </div>
      </div>
      <div className='cards2'>
      <div className='fever'>
          <img className='doliprane' src={doliprane} alt='logo'/>
          <h5>Propriétés</h5>
          <h6>Description</h6>
          <p>Description</p>
        </div>
        <div className='fever'>
          <img className='advil' src={advil} alt='logo'/>
          <h5>Propriétés</h5>
          <h6>Description</h6>
          <p>Description</p>
        </div>
        <div className='fever'>
          <img className='tramadol' src={tramadol} alt='logo'/>
          <h5>Propriétés</h5>
          <h6>Description</h6>
          <p>Description</p>
        </div>

      </div>

    </div>
    <div className='cntact'>
        <p>Avec Médic'App, s'approvisionner en produits et services pharmaceutiques n'a jamais été aussi simple dans votre ville !
        <br></br>Cliquez sur la rubrique correspondant à votre besoin!
        </p>
        <div className='doonnees'>
            <div className='doonnees1'>
                <div className='cod10'>
                  <img className='localisation' src={localisation} alt='logo'/>
                  <h6>Adresse</h6>
                  <p>Rue de Gouverneur Bernard Port-Gentil,BP 640</p>
                </div>
                <div className='cod11'>
                  <img className='telephone' src={call1} alt='logo'/>
                  <h6>Téléphone</h6>
                  <p>01.55.21.64</p>
                </div>
                <div className='cod12'>
                  <img className='lhorloge' src={lhorloge} alt='logo'/>
                  <h6>Horaires habituelles</h6>
                  <p>Du Lundi au samedi de 7h00 à 20h00 <br></br>Dimanche fermé</p>
                </div>
                <div className='cod13'>
                  <h5>Réseaux sociaux</h5>
                  <img className='facebook' src={facebook} alt='logo'/>
                  <p>Pharmacie Centrale,Port-Gentil,GABON</p>
                </div>
            </div>
            <div className='doonnee2'>
              <h2>Contactez-nous</h2>
              <form className='formfour'
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
        <h6 className='notes2'>Notre société recueille vos données afin de traiter votre demande de contact.Les données requises sont nécessaires pour en assurer le suivi et <br></br>
        sont réservées à l'usage exclusif de notre société.Elles ne seront en aucun cas communiquées à des tiers.<br></br>
        Conformément à la loi informatique et libertés, vous bénéficiez d'un droit d'accès, de modification,de rectification et de suppression des données vous concernant.<br></br>
        Vous seul pouvez exercer ces droits sur vos propres données en vous adressant à <strong>Pharmacie Centrale-Rue de Gouverneur Bernard Port-Gentil-BP 640</strong></h6>
    </div>
    </div>
  );
}