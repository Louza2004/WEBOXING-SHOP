import React from 'react';
import './main.css';
import News from '../../components/news';
import newImg from '../assets/image1main.png';
import newImg1 from '../assets/image2main.png';
import newImg2 from '../assets/image3main.png'
import newImg3 from '../assets/image4main.png'
import Footer from '../../components/Footer';
import Contact from '../../components/contact';




export default function Main() {
  return (
    <div className="main">
      <div className="filter">
          <h1>Bienvenue</h1>
          <p>"Réveillez le champion qui sommeille en vous avec Weboxing !"</p>
          <button className='login-button'><a href="/">Se Connecter</a></button>
      </div>
   
      <News
      newsImg={newImg}
      title="Actualité"
      text="🥊 Nouveau cours de boxe de groupe ! Rejoignez-nous pour une expérience d'entraînement intense et dynamique. Notre entraîneur professionnel vous guidera à travers des séances de boxe variées, adaptées à tous les niveaux. Ne manquez pas cette occasion de vous entraîner dans une ambiance conviviale et motivante. Réservez votre place dès maintenant et venez découvrir les bienfaits de la boxe pour votre corps et votre esprit ! 🥊"
      cName="flex1"/>


      <News
      newsImg={newImg1}
      title="Qui sommes nous ?"
      text=" Chez Weboxing, nous sommes une équipe passionnée par la boxe et dévouée à offrir à nos clients une expérience exceptionnelle.

      Notre objectif est de fournir des équipements de boxe de haute qualité, soigneusement sélectionnés pour répondre aux besoins des boxeurs de tous niveaux. De plus, nous sommes fiers de proposer des services d'entraînement professionnels, dispensés par des coachs expérimentés, pour vous aider à atteindre vos objectifs sportifs. 

      Rejoignez la communauté Weboxing dès aujourd'hui et découvrez notre passion pour la boxe et notre engagement envers votre réussite sportive !"
      cName="flex2"/>

      
      <div className='newsform'>
            <News
      newsImg={newImg2}
      cName="flex3"/>
      <Contact/>
      </div>
  

      <News
      newsImg={newImg3}
      cName="center"/>
      
      
     
      <Footer/>
    </div>
  )
}
