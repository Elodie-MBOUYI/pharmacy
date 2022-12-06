import React  from 'react'
import doliprane from '../assets/doliprane.png'
import advil from '../assets/advil.png'
import tramadol from '../assets/tramadol.png'
import film from '../assets/film.png'
import delivery from '../assets/delivrery.png'
import ordi from '../assets/ordi.png'
import './Rubriquec.css'


export default function MediaCard() {

  


  return (
    <div className='fievre'>
      <h2>Douleurs et Fièvre</h2>
      <span className="ligne"></span>
      <p className='fiep'>Aperçu des produits les plus demandés dans la catégorie choisie</p>
      <div className='cards' >
            <div className='cards1'>
              <div className='imgc'>
                <img className='doliprane' src={doliprane} alt='logo'/>
              </div>
              <div className='textimgc'>
                <h5>Propriétés</h5>
                <h6>Description</h6>
                <p>Prix:</p>
              </div>
            </div>
            <div className='cards1'>
              <div className='imgc'>
                <img className='tramadol' src={tramadol} alt='logo'/>
              </div>
              <div className='textimgc'>
                <h5>Propriétés</h5>
                <h6>Description</h6>
                <p>Prix:</p>
              </div>
            </div>
            <div className='cards1'>
              <div className='imgc'>
                <img className='advil' src={advil} alt='logo'/>
              </div>
              <div className='textimgc'>
                <h5>Propriétés</h5>
                <h6>Description</h6>
                <p>Prix:</p>
              </div>
            </div>
        </div>
        <h2>Ordonnance & Commandes<br></br>à distance </h2>
        <div  className='transaction'>
          <div className='transaction1'>
            <p className='p1'>Vous pouvez envoyer directement en ligne votre ordonnance médicale à la Pharmacie Centrale.Il vous suffit de prendre en photo votre ordonnance.Vous avez également <br></br>la possibilité d’ajouter à votre demande d’autres produits ou médicaments de parapharmacie dans le champ «Produits désirés ».</p>
            <p className='p2'>Une fois que nous avons reçu votre ordonnance et traité votre demande, vous recevrez <strong>un mail de confirmation</strong> ou <strong>un appel</strong>.Il ne reste plus qu’à venir retirer <br></br> votre commande dans notre pharmacie sous un délai de 24 heures.</p>
            <p className='p3'>NB : En cas de retrait en officine, il vous sera demandé l’original de l’ordonnance lors de votre retrait de médicament en pharmacie</p>
            <div className='process'>
              <div className='film'>
                 <img className='film' src={film} alt='logo'/>
                 <p>Filmez votre  ordonnance</p>
              </div>
              <div className='ordi'>
                <img className='ordi' src={ordi} alt='logo'/>
                <p>Envoyez-la à votre pharmacie</p>
              </div>
              <div className='delivrery'>
                <img className='delivrery' src={delivery} alt='logo'/>
                <p>Retirez vos médicaments</p>
              </div>
             
            </div>
          </div>
          <div className='transaction2'>
            <form action="/action_page.php" className='trans2'>
                <input type="text"  name="nom" placeholder='Votre nom et prénom'></input>
                <input type="number"  name="phone" placeholder='Votre téléphone'></input>
                <label for="prescrip">Vous avez jusqu'à 3 ordonnances à charger ne dépassant pas 7 MB par ordonnance:</label>
                <input className='file' type="file" id="prescrip" name="prescrip" accept="image/png, image/jpeg,image/pdf"></input>
                <input  className='file' type="file" id="prescrip" name="prescrip" accept="image/png, image/jpeg,image/pdf"></input>
                <input  className='file' type="file" id="prescrip" name="prescrip" accept="image/png, image/jpeg,image/pdf"></input>
                <textarea className='com' type="text"  name="nom" placeholder='Votre commande (exemple:Doliprane 1000mg,...)'></textarea>
                <input className='sbm' type="submit" value="Submit"></input>
            </form>
          </div>

        </div>
    <div className='cntact'>
        <h6 className='notes2'>Notre société recueille vos données afin de traiter votre demande de contact.Les données requises sont nécessaires pour en assurer le suivi et <br></br>
        sont réservées à l'usage exclusif de notre société.Elles ne seront en aucun cas communiquées à des tiers.<br></br>
        Conformément à la loi informatique et libertés, vous bénéficiez d'un droit d'accès, de modification,de rectification et de suppression des données vous concernant.<br></br>
        Vous seul pouvez exercer ces droits sur vos propres données en vous adressant à <strong>Pharmacie Centrale-Rue de Gouverneur Bernard Port-Gentil-BP 640</strong></h6>
    </div>
    </div>
  );
}