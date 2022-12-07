import {useState}  from 'react'
import doliprane from '../assets/doliprane.png'
import advil from '../assets/advil.png'
import tramadol from '../assets/tramadol.png'
import film from '../assets/film.png'
import delivery from '../assets/delivrery.png'
import ordi from '../assets/ordi.png'
import './Rubriquec.css'
import axios from 'axios';


export default function MediaCard() {

  // les valeurs
  const [nom_client,setNom_clent] = useState('')
  const [telephone,setTelephone] = useState('')
  const [ordonnance,setOrdonnance] = useState('')
  const [id_statut,setId_statut] = useState('')
  const [message,setMessage] = useState('')
  console.log({nom_client,telephone,ordonnance,message,id_statut})

  // conditions sur l'état des valeurs
  const handleNom_client = (e)=>{ 
     setNom_clent(e.target.value)
  }
  const handleTelephone = (e)=>{ 
    setTelephone(e.target.value)
  }
  
  const handleMessage = (e)=>{
    setMessage(e.target.value)
  }
  const handleOrdonnance = (e)=>{
    setOrdonnance(e.target.value)
  }
  const handleId_statut = (e)=>{
    setId_statut(e.target.value)
  }

// connexion à l'api,méthode post
const handleApi = (e)=>{
  console.log({nom_client,telephone,message})
axios.post('http://localhost:3500/api/demandes/ajout',{
    nom_client:nom_client,
    telephone:telephone,
    ordonnance:ordonnance,
    message:message,
    id_statut
})
.then(result=>{
  console.log(result)
})
.catch(error=>{
  console.log(error)
})
}

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
                <h6>Ce médicament contient un anti-inflammatoire non stéroïdien : l’ibuprofène.Il est indiqué, chez l’adulte et l’enfant de plus de 30 kg <br></br>(soit environ 11-12 ans), dans le traitement de courte durée de la <br></br>fièvre et/ou des douleurs.</h6>
                <p>Prix:1.900 Fcfa</p>
              </div>
            </div>
            <div className='cards1'>
              <div className='imgc'>
                <img className='tramadol' src={tramadol} alt='logo'/>
              </div>
              <div className='textimgc'>
                <h5>Propriétés</h5>
                <h6>Ce médicament contient un anti-inflammatoire non stéroïdien : l’ibuprofène.Il est indiqué, chez l’adulte et l’enfant de plus de 30 kg <br></br>(soit environ 11-12 ans), dans le traitement de courte durée de la <br></br>fièvre et/ou des douleurs.</h6>
                <p>Prix:2.840 Fcfa</p>
              </div>
            </div>
            <div className='cards1'>
              <div className='imgc'>
                <img className='advil' src={advil} alt='logo'/>
              </div>
              <div className='textimgc'>
                <h5>Propriétés</h5>
                <h6>Ce médicament contient un anti-inflammatoire non stéroïdien : l’ibuprofène.Il est indiqué, chez l’adulte et l’enfant de plus de 30 kg <br></br>(soit environ 11-12 ans), dans le traitement de courte durée de la <br></br>fièvre et/ou des douleurs.</h6>
                <p>Prix:1.265 Fcfa</p>
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
            <form action="" className='trans2'>
                
                <input value={nom_client} onChange={handleNom_client}   type="text"  placeholder='Votre nom et prénom'></input>
                <input value={telephone} onChange={handleTelephone} type="number"   placeholder='Votre téléphone'></input>
                <label for="prescrip">Vous avez jusqu'à 3 ordonnances à charger ne dépassant pas 7 MB par ordonnance:</label>
                <input value={ordonnance} onChange={handleOrdonnance}   type="file"  placeholder='Votre nom et prénom'></input>
                <textarea value={message}  onChange={handleMessage} className='com' type="text"  placeholder='Votre commande (exemple:Doliprane 1000mg,...)'></textarea>
                <select value={id_statut} onChange={handleId_statut} type="number">
                  <option >--Choisissez une option--</option>
                  <option >1-Me renseigner</option>
                  <option >2-Acheter</option>
                </select>
                <button onClick={handleApi} className='sbm'>Soumettre</button>
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