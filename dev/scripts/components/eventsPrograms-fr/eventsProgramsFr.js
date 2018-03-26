import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom'; 

import NavbarFr from '../navbar-fr/navbar-fr';

class EventsProgramsFr extends React.Component { 
    render () { 
        return (
            <div>
                <NavbarFr />
                <section id="eventsPrograms" className='eventsPrograms'>
                    <div className="wrapper">
                        <h1>Événements & programmes</h1>
                        <div className="container">
                            <h2>Multicultural Forum</h2>
                            <p>
                                Dans le but d’établir des échanges interculturels, le « Forum Multiculturel» : permettra aux Jeunes et au public de dialoguer et de partager entre eux des expériences sur des sujets que leurs communautés et le public ont en commun afin de mieux s’intégrer dans la société canadienne. Un sujet fascinant est choisi chaque année sur lequel les différentes communautés élaborent leurs points de vues. Le Forum Multiculturel est une activité qui vise à resserrer les liens entre les communautés.
                            </p>
                            <div className="container spaceAround">
                                <img src="/assets/images/mediaImages/TAMOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/TAMThree.png" alt=""/>
                            </div>
                            <div className="container rmf">
                                <h4>Forums multiculturels récents</h4>
                                <ul>
                                    <li>Premier forum multiculturel: Droits civils et intégration –August 22, 2015</li>
                                    <li>Deuxième forum multiculturel: Changement climatique et intégration- August 19th, 2016</li>
                                    <li>Troisième forum multiculturel:  Identité canadienne et inclusion – September 9th, 2017</li>
                                    <li>Quatrième forum multiculturel: Valeurs démocratiques canadiennes et migration mondiale -<strong> Press release & Flyer will be sent out shortly </strong> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Le mois de l’histoire des Noirs</h2>
                            <p>
                                Chaque année, en Février, à travers le pays, les Canadiens et les Canadiennes célèbrent le Mois de l’Histoire des Noirs. Pour marquer ce mois, toutes les communautés noires réfléchissent sur ​​la contribution des Canadiens d’origine africaine, un acte qui symbolise leur héritage pour un Canada qui embrasse la diversité et l’égalité des chances. Lors de ce mois, tous les Canadiens sont appelés à prendre part aux célébrations et activités qui honorent le patrimoine des Canadiens de race noire et ceux de nos jours, qui ont ouvert la voie pour sensibiliser la communauté noire.  La célébration du Mois de l’Histoire de Noirs a commencé au Canada en 1970. À l’époque, il était connu comme la semaine de l’histoire des Noirs ou la <strong> Semaine de l’Histoire Nègre.</strong> L’objectif de cette semaine était sur ​​l’accomplissement ainsi que de montrer que l’histoire des Noirs était cruciale pour la sauvegarde de l’endurance physique et culturelle de la race dans la société au sens large. En 1976, le nom a été changé à Mois de l’histoire des Noirs. Il est commémoré au Canada, aux États-Unis et au Royaume-Uni comme une célébration annuelle du souvenir des événements importants et de la diaspora africaine.
                                En 1995, la Chambre des communes a reconnu officiellement Février comme Mois de l’Histoire de Noir suite à une motion présentée par la députée, Jean Augustine. L’honourable Jean Augustine a été la première Femme Noire élue au Parlement canadien. Elle a représenté la Circonscription d’Etobicoke- Lakeshore en Ontario. La motion a été approuvée à l’unanimité par la Chambre des communes.
                                <br/>
                                <strong>
                                    Une histoire riche et fière
                                </strong> 
                                <br/> 
                                La Fondation Sylvenie Lindor est fière de célébrer la contribution de tous les Canadiens et toutes les Canadiennes de race noire et leur rôle dynamique dans la sensibilisation au sein des communautés noires à travers le pays. Dans cet esprit, nous insistons sur la diversité culturelle et la richesse apportées par toutes les communautés qui, en retour qui crée l’intégration et la cohésion sociale. Pendant le Mois de l’Histoire des Noirs, nous nous efforçons de sensibiliser les Jeunes Canadiens noirs, les encourager à travailler dur pour un avenir brillant et de reconnaître la contribution de ceux qui ont   tracé les bases devant eux.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Immigration Francophone</h2>
                            <p>
                                La Fondation Sylvenie Lindor considère la langue française comme un outil clef qui permet aux immigrants Francophones à mieux s’intégrer dans la société canadienne. <br/>
                                A la Fondation Sylvenie Lindor  nous reconnaissons l’apport de chaque culture pour la construction d’une communauté vibrante et accueillante. La semaine nationale de l’Immigration Francophone est célébrée durant la première semaine du Mois de Novembre de chaque mois. Pendant cette semaine, partout au pays, les francophones et  Acadiens se rassemblent pour célébrer ce patrimoine commun.
                            </p>
                            <div className="container">
                                <img src="/assets/images/mediaImages/francImmOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/francImmTwo.png" alt=""/>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Mouvement des Jeunes Haitiens</h2>
                            <p>
                                La Fondation Sylvenie Linder est émergé comme moyen d'aider les jeunes francophones noirs à surmonter les barrières sociales et linguistiques dans la  ville de Toronto.  Nous utilisons le Forum des Jeunes , le soccer pour l'intégration, l'inclusion et la cohésion sociale qui permettent aux jeunes d'explorer les opportunités
                            </p>
                            <h2>Tournoi de soccer</h2>
                            <p>
                                Nous utilisons le soccer comme moyen d'aider les jeunes à s'intégrer et aussi bien pour s'amuser. La participation des jeunes dans le terrain de soccer les aide à développer le réseautage avec les jeunes des communautés de variétés. 
                            </p>
                            <h2>Bonne nuit</h2>
                            <p>
                                C'est une nuit où la jeunesse haïtienne et le grenadier FC se rassemblent pour l'interaction sociale.  Bonne nuit est tenue une fois par mois.  Pendant cette nuit, les jeunes regardent un film ou un documentaire ensemble et y réfléchissent.  La nuit est amusée par la musique et le rafraîchissement est servi. 
                            </p>
                            <h2>Tournée canadienne</h2>
                            <p>
                                Nous organisons des tournées canadiennes non seulement pour le plaisir, mais aussi pour aider les jeunes à comprendre l'histoire du Canada. Nous visitons les sites touristiques et les musées canadiens.  Une approche pour comprendre ceux qui ont ouvert la voie devant nous pour un Canada qui englobe la diversité.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Programme d’entrepreneuriat des Jeunes</h2>
                            <p>
                                Nous travaillons étroitement avec les jeunes adultes et nous les orientons en fonction de leur aspiration. Nous fournissons des ateliers, des séminaires et des programmes après l’école.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Parrainage et le plan de l’éducation en Haïti</h2>
                            <p>
                                Parrainage et le plan de l’éducationnel Haïti – Ce programme a été lancé en Septembre 2015. Il nous a permis d’offrir de matériels scolaires et de l’aide financière aux enfants et aux Jeunes se trouvant dans le besoin en Haïti.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Club de Football Toronto Uni</h2>
                            <p>
                                <strong>Histoire: </strong> Football Club de Toronto Uni (l’Equipe de la diaspora Haïtienne de Toronto) a été créé à Toronto en Octobre 2014. Le club est composé d’athlètes masculins. Le Club fait partie du Mouvement de Jeune Haïtienne du Canada, qui est une entité de la Fondation Sylvenie Lindor. Le Mouvement des Jeunes Haïtiens du Canada est un endroit pour les Jeunes Haïtiens, ceux d’origine Haïtienne, les Francophones à développer les compétences en leadership dont ils ont besoin dans n’importe quel chemins qu’ils ont choisi de suivre dans la vie. <strong> With the Slogan: Soccer for Integration – Soccer for  Social Cohesion, </strong> le Club met en œuvre tous les programmes pour aider les athlètes à réussir non seulement dans le domaine du sport mais dans la vie en général. Le Club de soccer est composé d’athlètes masculins à partir d’une variété de milieux culturels.
                                <br/>
                                    Football Club de Toronto Uni est une association à but non lucratif. Le Club est soutenu par la Fondation Lindor Sylvenie le Mouvement des Jeunes Haïtiens du Canada et de la communauté haïtienne de Toronto et le Consulat d’Haïti à Toronto.
                            </p>
                            <h2>Liste des Joeurs  de l’Equipe Footbal Toronto Uni</h2>
                                <div className="soccerNamesContainer">
                                
                                <div className="soccerPlayerNames">
                                    <label>First Name</label>
                                    <label>Last Name</label>
                                    <label>Position</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Jean Yves</label>
                                    <label>Ducé</label>
                                    <label>Captain</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Lucnor</label>
                                    <label>Louis</label>
                                    <label>Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Justin</label>
                                    <label>Lee</label>
                                    <label>Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Justin</label>
                                    <label>Phillipphe</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Lathory</label>
                                    <label>Ducé</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Bruce</label>
                                    <label>Akaraza</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Haman</label>
                                    <label>Noori</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Yvenson</label>
                                    <label>Ducé</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Jerry</label>
                                    <label>Lafontan</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Alfredo</label>
                                    <label>Delisma</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Wilson</label>
                                    <label>Akolic</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Greggy</label>
                                    <label>Balan</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Sondy</label>
                                    <label>Pierre</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Miley</label>
                                    <label>Saint Juste</label>
                                    <label>	Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stanley</label>
                                    <label>Romulus</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Bruce</label>
                                    <label>Alwayne</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stephane</label>
                                    <label>Tapegon</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Emmanuel</label>
                                    <label>Oduro Yedoha</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Natan</label>
                                    <label>Clayton</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Natanael</label>
                                    <label>Brutus</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Ozcan</label>
                                    <label>Mustafa</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Charles</label>
                                    <label>Mubarik</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Luckson</label>
                                    <label>Louis</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stephane</label>
                                    <label>Marcel</label>
                                    <label>Middle</label>
                                </div>
                                </div>
                            <div className="container soccerClubImg">
                                <img src="/assets/images/mediaImages/soccerClub.png" alt=""/>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Club Garçons et Filles en Haïti</h2>
                            <p>
                                Un lieu pour les jeunes en Haïti de recréer – de prendre des mesures pour le changement. Grace à ACT -Action pour Changer Demain, la Fondation organise des ateliers de travail qui permettent aux jeunes en Haïti à comprendre les défies mondiaux et agir en conséquence.
                            </p>
                        </div>
                        <div className="container">
                            <h2> Voyage en Haïti - Visite à l'école primaire et secondaire en Haïti - Janvier 2016</h2>
                            <p>
                            Club Garçons et Filles en Haïti - Un lieu pour les jeunes en Haïti pour être créatif - agir pour le changement. Grâce à ACT- Action to Change Tomorrow, la Fondation organise des ateliers qui permettent
                            Les jeunes d'Haïti comprennent les défis mondiaux et contribuent à les changer.
                            </p>
                            <div className="container">
                                <img src="/assets/images/mediaImages/tripToHaiti.png" alt=""/>
                                <img src="/assets/images/mediaImages/tripToHaitiTwo.png" alt=""/>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Bonne nuit</h2>
                            <p>
                                C'est une nuit où la jeunesse haïtienne et le Grenadier Fc se réunissent pour interagir socialement. Bonne nuit a lieu une fois par mois. Pendant cette nuit, les jeunes regardent ensemble un film ou un documentaire
                                et réfléchissez-y. La nuit est animée par la musique et des rafraîchissements sont servis. 
                            </p>
                        </div>
                        <div className="container">
                            <h2>Tours canadiens</h2>
                            <p>
                            Nous organisons des tournées canadiennes non seulement pour le plaisir, mais aussi pour aider les jeunes à comprendre l'histoire du Canada.
                            Nous visitons les sites touristiques canadiens et les musées. Une approche pour comprendre ceux qui ont pavé la voie
                            chemin devant nous pour un Canada qui embrasse la diversité
                            </p>
                        </div>
                    </div>
                </section>
            </div>
) } } export default EventsProgramsFr