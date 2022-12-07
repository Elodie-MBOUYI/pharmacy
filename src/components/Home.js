import {useEffect,useState} from 'react'
import call2 from '../assets/call2.png'
import mail from '../assets/mail.png'
import messenger from '../assets/messenger.png'
import whats from '../assets/whats.png'
import {Link}  from 'react-router-dom'
import './Home.css'


function Home () {

  const [pharmacies, setPharmacies] = useState([])

// api get implementation

  useEffect(() => {
  const url = "http://localhost:3500/api/pharmacies"
  fetch(url)
  .then(response=> response.json()).then(json => {
      console.log("jsonnnn", json)
      setPharmacies(json)
  }).catch(e => {
      console.log("e", e)
  })
}, [])
  
  return (
    <div className='home'>
        <div className='content'>
            <p>A Port-Gentil...</p>
            <p>Avec l'application Médic'App</p>
            <p>Contacter votre pharmacien</p>
            <p>Vérifier la disponibilité de vos produits </p>
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
                  <button ><Link to="/pharms">Pharmacie ANDREA</Link></button>
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
                <p>Pour tout vos besoins en services pharmaceutiques <br></br> n'hésitez pas à nous contactez !</p>
                <span className='span1'></span>
                {
                  pharmacies.map(item => {
                      return(
                        <button ><Link to="/Degarde">{item.nom_pharmacie}</Link></button>
                      )
                  })
                }
              </div>
          </div>

        </div>
        <div className='contacts'>
          <div className='abt'>
            <h5>A propos</h5>
            <p>MEDIC'APP est une applcation web et web mobile qui se veut une plateforme regroupant l'ensemble des pharmacies de notre ville.</p>

          </div>
          <div className='lk'>
            <h5>Entrer en contact</h5>
            <img className='all1' src={call2}  alt='logo'/> 
            <h6 className='lk1'>074.62.38.01</h6>
            <img className='all2' src={whats}  alt='logo'/> 
            <h6 className='lk2'>04.62.38.01</h6>
            <img className='all3' src={messenger}  alt='logo'/> 
            <h6 className='lk3'>Elodie MBOUYI</h6>
            <img className='all4' src={mail}  alt='logo'/> 
            <h6 className='lk4'>elodiembouyi@gmail.com</h6>
            <p className='wrt'>Copyright&copy;Médic'App 2022-Elodie MBOUYI</p>
            
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