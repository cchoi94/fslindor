import React from 'react';
import Slider from 'react-slick'
import AboutFr from '../about-fr/about-fr';
import NavbarFr from '../navbar-fr/navbar-fr';
import ContactFr from '../contact-fr/contactFr';

class LandingFr extends React.Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: 'carousel',
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false
        };
        return (
          <div>
            <NavbarFr />
            <section id="home">
              <Slider {...settings}>
                <div className='logo-slide slideOne'>
                </div>
                <a href="http://lemetropolitain.com/un-forum-pour-faire-du-multiculturalisme-une-force/">
                  <div className='logo-slide slideTwo'>
                      <h3>Forum Multiculturel d’Identité Canadienne et d’inclusion : Une force pour le Multiculturalisme</h3>
                  </div>
                </a>
                <a href="https://l-express.ca/des-jeunes-issus-de-limmigration-ont-discute-didentite-canadienne/">
                  <div className='logo-slide slideThree'>
                      <h3>Des Jeunes Immigrants discutent d’identité Canadienne au 3ème Forum Multiculturel d’Identité Canadienne & l’Inclusion</h3>
                  </div>
                </a>
                <a href="https://onfr.tfo.org/migrants-haitiens-nous-navons-pas-de-reponse/">
                  <div className='logo-slide slideFour'>
                      <h3>Echéance du TPS des Haïtiens aux EU en Janvier 2018 – Un Appel au Gouvernement Ontarien</h3>
                  </div>
                </a>
                <a href="https://onfr.tfo.org/demandeurs-dasile-haitiens-linaction-de-lontario-denoncee/">
                  <div className='logo-slide slideFive'>
                      <h3>60 Milles Haïtiens sont ménacés d’être expulsés vers Haiti en Janvier 2018 . Ontario pourrait-elle leur tendre la main ?</h3>
                  </div>
                </a>
              </Slider>
              <p>
                L’équipe de la Fondation Sylvenie Lindor est composée de plusieurs membres ayant pour mission de poursuivre 
                les objectifs assignés par la fondation. Notre mission quotidienne, en tant que membres, est de trouver les moyens 
                nécessaires pour aider les enfants dans le besoin à réussir sur le plan éducatif, aider les jeunes à acquérir des 
                compétences en leadership afin de faciliter leur intégration dans la société canadienne, de promouvoir les échanges 
                interculturels et de mettre en place des plates- formes propice pour l’intégration des groupes minoritaires visibles 
                dans le but de promouvoir la cohésion sociale. Notre équipe est composé d’avocats, conseillers de jeunes, chefs d’entreprise, 
                activiste communautaires, infirmières, enseignants, sociologues, économistes, comptables, philosophes, travailleurs sociaux et des 
                jeunes dynamiques qui ont un grand attachement à leurs communautés.
              </p>
            </section>
            <AboutFr />
            <ContactFr />
          </div>
        );
      }
}

export default LandingFr