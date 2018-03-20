import React from 'react';

import NavbarFr from '../navbar-fr/navbar-fr';

class SponsorFr extends React.Component { 
    render () { 
        return (
            <div>
                <NavbarFr />
                <section id="sponsor" className='sponsor'>
                    <div className="wrapper">
                        <h1>Supporter la cause</h1>
                        <p>
                            <strong>Votre contribution:</strong>  Pour aider les jeunes immigrants francophones à mieux intégrer dans la société canadienne afin de devenir indépendant. Votre contribution pour promouvoir l’échange culturel à fin de faciliter l’intégration des groupes minoritaires visibles. Votre contribution pour aider ces jeunes afin de développer leurs talents  pour réussir. Votre contribution pour promouvoir l’art, les sports comme moyen d’éliminer la violence dans le milieu juvénile.
                            <br/>
                            Votre Contribution d’aider les enfants pauvres en Haïti à réussir. Votre contribution pour envoyer un enfant à l’école. Votre contribution pour fournir des matériels scolaires aux enfants en Haïti. Votre contribution pour aider les jeunes à comprendre les défis de la mondialisation et à commencer une nouvelle vie.
                            <br/>
                            A la Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine Inc. nous apprécions la générosité de nos donateurs qui sont des vrais partenaires qui nous aident à réaliser nos objectifs et notre mission. A la (FSL& CMJMF), nos activités quotidiennes se font en conformité avec les codes d’éthiques et de professionnalisme afin que les dons soient bien orientés.
                        </p>
                        <h2>Les noms de tous nos partenaires sont cités dans notre siteweb.</h2>
                            <li><strong>Faire un don en ligne:</strong>Vous pouvez faire un don en ligne par cartes de crédit: Master Card,-Visa – American Express. Nous utilisons un serveur sécurisé PayPal.</li>
                        <h2>Nos Enfants – Nos Jeunes, Notre Communauté</h2>
                        <p>
                            Votre don à la Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine aidera les enfants, Jeunes, Groupes de minorités visibles dans les domaines suivants:
                        </p>
                        <h2>Forum Multiculturel</h2>
                        <p>est une activité d’échange interculturel annuel et de dialogue entre les jeunes de 18 ans ainsi que des différentes collectivités et le public vivant dans la Région du grand Toronto sur de nombreux sujets importants qui touchent à nos vies dans la société canadienne. Visant à créer l’intégration dans le contexte de la diversité culturelle, le forum aidera chaque communauté à explorer la réalité de l’autre.</p>
                        <h2>Mouvement de la Jeunesse Haïtienne Canada (HYMC):</h2>
                        <p>
                        Un lieu pour aider les jeunes à prendre des mesures nécessaires pour le changement – Nous fournissons le mentorship- football club- sport contre la violence; le sports comme outil de l’intégration. Au HYMC, la Fondation Sylvenie Lindor travaille avec la jeunesse haïtienne, francophone et tous les jeunes adultes dans la région du Grand Toronto (RGT) en les aidant à développer leurs compétences en leadership. <strong>Programme d’Entrepreneuriat des Jeunes:</strong> Nous travaillons étroitement avec les jeunes adultes et les orientons en fonction de leur aspiration. Nous fournissons des ateliers, des séminaires et des programmes après l’école. <strong>Parrainage et le Programme d’éducation en Haïti</strong> – Ce programme a été lancé en septembre 2015. Il nous a permis d’offrir de matériels scolaires et  aider financièrement les enfants et les jeunes dans le besoin en Haïti. <strong>Club Garçons et Filles en Haïti</strong> – Un lieu pour les Jeunes Haïtiens  de se recréer – de prendre des mesures pour le changement. Grâce à <strong>ACT</strong> -Action pour changer demain, la Fondation organise des ateliers de travail qui permettent aux jeunes en Haïti à comprendre les défis mondiaux et à agir en conséquence.
                        </p>
                        <h1>Parrainage</h1>
                        <p>
                            La Fondation Sylvenie Lindor voudrait exprimer sa plus profonde gratitude à tous ses partenaires publics, privés et communautaires qui l’aide à réaliser son mandat, sa mission et ses objectifs.
                        </p>
                        <div className="container">
                                <div className="imgBox">
                                    <div className="sponsorLogo sLogoOne"></div>
                                    <div className="sponsorLogo sLogoTwo"></div>
                                    <div className="sponsorLogo sLogoThree"></div>
                                    <div className="sponsorLogo sLogoFour"></div>
                                    <div className="sponsorLogo sLogoFive"></div>
                                    <div className="sponsorLogo sLogoSix"></div>
                                </div>
                        </div>
                                <h2>Comunity Sponsors</h2>
                                    <ul className="communitySponsors">
                                        <li>La Maison d’Hait du Grand Toronto</li>
                                        <li>La Communauté Hatienne Unie de l’Ontario</li>
                                        <li>Grenadiers Football Club</li>
                                        <li>Haitian Youth Movement Toronto</li>
                                        <li>le Consulat d’Haiti à Toronto</li>
                                        <li>Balinguallink</li>
                                        <li>The Somalian Community of North Etobicoke</li>
                                        <li>The Congolese Community</li>
                                        <li>13ème Option pour le developpemen</li>
                                    </ul>
                        <h2>
                        Votre aide est très appréciée!
                        </h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input name="cmd" type="hidden" value="_s-xclick"/>
                                <input name="hosted_button_id" type="hidden" value="SG6LQ3UC3KR84"/> 
                                <button className="donate">
                                Donnez
                                </button>   
                            </form>
                    </div>
                </section>
            </div>
) } } export default SponsorFr