import React from 'react'; 

class AboutFr extends React.Component { 
    constructor() {
        super();
        this.state = {
            showBioDesOne: false,
            showBioDesTwo: false,
            showBioDesThree: false,
            showBioDesFour: false,
            showBioDesFive: false,
            showBioDesSix: false,
            showBioDesSeven: false,
        };
        
        this.handleShowBioOne = this.handleShowBioOne.bind(this);
        this.handleShowBioTwo = this.handleShowBioTwo.bind(this);
        this.handleShowBioThree = this.handleShowBioThree.bind(this);
        this.handleShowBioFour = this.handleShowBioFour.bind(this);
        this.handleShowBioFive = this.handleShowBioFive.bind(this);
        this.handleShowBioSix = this.handleShowBioSix.bind(this);
        this.handleShowBioSeven = this.handleShowBioSeven.bind(this);
    }

    handleShowBioOne(e) {
        let toggleBio = !this.state.showBioDesOne
        this.setState ({
            showBioDesOne: toggleBio
        })
    }

    handleShowBioTwo(e) {
        let toggleBio = !this.state.showBioDesTwo
        this.setState ({
            showBioDesTwo: toggleBio
        })
    }

    handleShowBioThree(e) {
        let toggleBio = !this.state.showBioDesThree
        this.setState ({
            showBioDesThree: toggleBio
        })
    }

    handleShowBioFour(e) {
        let toggleBio = !this.state.showBioDesFour
        this.setState ({
            showBioDesFour: toggleBio
        })
    }

    handleShowBioFive(e) {
        let toggleBio = !this.state.showBioDesFive
        this.setState ({
            showBioDesFive: toggleBio
        })
    }

    handleShowBioSix(e) {
        let toggleBio = !this.state.showBioDesSix
        this.setState ({
            showBioDesSix: toggleBio
        })
    }

    handleShowBioSeven(e) {
        let toggleBio = !this.state.showBioDesSeven
        this.setState ({
            showBioDesSeven: toggleBio
        })
    }


    render () { 

        let showDesOne = (this.state.showBioDesOne) ? 'block' : 'hidden';
        let showDesTwo = (this.state.showBioDesTwo) ? 'block' : 'hidden';
        let showDesThree = (this.state.showBioDesThree) ? 'block' : 'hidden';
        let showDesFour = (this.state.showBioDesFour) ? 'block' : 'hidden';
        let showDesFive = (this.state.showBioDesFive) ? 'block' : 'hidden';
        let showDesSix = (this.state.showBioDesSix) ? 'block' : 'hidden';
        let showDesSeven = (this.state.showBioDesSeven) ? 'block' : 'hidden'

        return (
            <div>
                <section id="aboutFr" className="about">
                    <div className="wrapper">
                        <h1>Qui Sommes-nous</h1>
                        <div className="container">
                            <div className="textBox">
                                <h2>Histoire</h2>
                                <p>
                                    La Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine Inc. (FSL&CMJMF)   est un organisme à but non –Lucratif fondée à Toronto en Janvier 2011 en vue de travailler à l’intégration des Jeunes Francophones Haïtiens dans la métropole Toronto et d’autres Jeunes Francophones qui cherchent à intégrer la Culture Canadienne pour créer l’autonomie . Considérant, les bienfaits du Multiculturalisme pour la Société Canadienne, FSL&CMJMF s’engage également dans la promotion Multiculturalisme comme un atout clé qui favorise l’intégration des Groupes Minoritaires Visibles à travers, l’Education, l’Arts, l’échange Culturel , la Musique et tout ce qui peut créer la créer la cohésion sociale au sein de nos Communautés.
                                </p>
                            </div>
                            <div className="textBox">
                                <h2>Mandat</h2>
                                <p>
                                Le Mandat de la Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine Inc. (FSL&CMJMF)   est de travailler avec Jeunes d’Origines Haïtienne et d’autres Jeunes Francophones   qui cherchent à intégrer la Culture Canadienne en vue de créer l’autonomie à travers du Programme agir pour changer demain (ACD). Par des séminaires de formation, des ateliers de travail, des débats sur la vie Canadienne, le programme ACD portera les Jeunes à avoir une vision claire de leur environnement et comment l’améliorer.
                                Mission : La Mission de la Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine Inc. (FSL&CMJMF)   est de travailler avec les Groupes Minoritaires Visibles : les Jeunes, les adultes, les différentes Communautés pour créer leur intégration tout en exposant chaque Culture pour entamer un dialogue et échange inter Culturel. Dans ce Contexte, FSL&CMJMF fait la promotion du Multiculturalisme comme un point central qui crée cette mosaïque Culturelle dans la société Canadienne
                                </p>
                            </div>
                            <div className="textBox">
                                <h2>L’Objectif</h2>
                                <p>
                                L’objectif de la Fondation Sylvenie Lindor & Centre Multiculturalisme Jean Marcelin Fontaine Inc. (FSL&CMJMF) est :
                                    Travailler à des Jeunes Francophones d’origines Haïtienne et d’autres Jeunes Francophone en vue d’aider à l’intégration à la Vie Canadienne.
                                    Promouvoir l’intégration des Groupes Minoritaires Visibles à travers l’Art, la Culture, l’Education, Musique et des activités de loisirs.
                                    Promouvoir le développement International dans les pays du Tiers monde
                                    Fournir des Services d’Éducation, de counseling et d’autres Services de soutien aux Immigrants et refugiés dans le besoin y compris des services d’enseignement linguistiques et d’information sur la Culture et la Vie Canadienne.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                        <section id="teamFr">
                            <div className="wrapper">
                            <h1>Notre équipe</h1>
                            <div className="container">
                            </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgOne"></div>
                                    <label>Mr. Amikley Fontaine <br/> Fondateur, Président & Directeur General</label>
                                    <br/>
                                    <button onClick={this.handleShowBioOne}>lis moi</button>
                                    <p className={showDesOne}>
                                    Me. Amikley fontaine est le fondateur de la Fondation Sylvenie Linder. Une organisation à but non lucratif qu'il nomme après sa défunte mère qui aide les jeunes francophones noirs à surmonter les barrières sociales et linguistiques à Toronto. Grâce aux travaux de sa fondation, M. Fontaine a mis en œuvre le mouvement des jeunes haïtiens et le  Club de football grenadiers. Le mouvement des jeunes imite le slogan de: soccer pour l'intégration, soccer pour la cohésion sociale visant à aider ces jeunes à s'intégrer dans la ville Reine. <br /> 
                                    Amikley fontaine est originaire d'Haïti.  Il est titulaire d'un baccalauréat avec spécialisation en philosophie ainsi que de deux certificats: l'un dans Droit et pensée Sociale  et l'autre en bilinguisme (français et anglais) de l'Université York. M. Fontaine, avec la  Fondation, organise chaque année le Forum multiculturel comme moyen de promouvoir la culture francophone et de réduire les barrières sociales à Toronto. <br />
                                    À travers les travaux de sa fondation, M. Fontaine aborde des questions comme: la migration mondiale, l'identité canadienne, le changement climatique, l'inclusion et l'intégration des groupes minoritaires qui ont fait l'objet d'un débat dans le cadre du Forum multiculturel pour les jeunes. Depuis l'année dernière, M. fontaine, avec la communauté haïtienne de Toronto, a plaidé auprès du gouvernement canadien au nom des migrants haïtiens aux États-Unis qui craignent une déportation vers Haiti en Juillet 2019  Il a rencontré les trois branches du gouvernement où il a abordé les questions du troisième accord sur la sécurité des pays, ce qui a rendu difficile la venue des demandeurs d'asile haïtiens en Ontario.  En collaboration avec l'équipe de la Fondation Sylvenie Linder, il a rencontré en mars 2017 le Haut Commissariat des Nations Unies pour les réfugiés au Canada, m. Jean-Nicolas beuze, où il s'est penché sur les problèmes des réfugiés haïtiens piégés à Tijuana, au nord du Mexique. <br />
                                    M. Fontaine est un amant des cultures francophones. Il croit que le manque de possibilités dans la communauté francophone est le résultat de barrières linguistiques et qu'il cherche donc des résultats qui permettent aux jeunes francophones de réussir. À la lumière de cela, sa Fondation a créé des programmes avant et après l'école pour les étudiants qui ont besoin d'aide pour promouvoir leurs compétences en français.  Avec le personnel de la Fondation, il crée des activités sociales comme, bonne nuit, visites d'exploration, soirée cinéma qui permettent aux nouveaux arrivants francophones de se sentir comme chez eux et d'explorer les horizons canadiens. <br />
                                    M. Fontaine est aussi poète et auteur, il a récemment publié avec deux membres fondateurs de sa fondation une collection de poèmes intitulé  «etre noir au Canada». Dans son livre, m. Fontaine retrace la contribution Il aborde également la question de la discrimination systémique, car il s'agit d'un obstacle majeur auquel sont confrontés les jeunes francophones et les nouveaux  arrivants en terme d'intégration et d'inclusion.
                                    </p>
                                </div>
                            <div className="container">
                                <div className="bioBox">
                                    <div className="bioImg bioImgTwo"></div>
                                    <label>Mr. Christopher Sullivan <br/> Directeur de la Communication</label>
                                    <br/>
                                    <button onClick={this.handleShowBioTwo}>lis moi</button>
                                    <p className={showDesTwo}>
                                        Me. Christopher Sullivan termine actuellement sa maîtrise en théorie juridique et débute ses études pour son diplôme de Juris Doctor en septembre. Natif de Toronto, il participe à plusieurs projets caritatifs dans toute la ville. Grâce à son amitié avec amikley fontaine, le fondateur de la Fondation Sylvenie Linder, il est devenu plus impliqué dans la Fondation au cours des dernières années, et mieux comprendre les besoins de la communauté haïtienne, ici dans cette ville, et ailleurs--surtout dans le cas où ils sont des migrants qui cherchent à venir au Canada.
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgThree"></div>
                                    <label>Mr. Junior Mandoko, MA <br/> Ambassadeur de Sensibilisation du Publique</label>
                                    <br/>
                                    <button onClick={this.handleShowBioThree}>lis moi</button>
                                    <p className={showDesThree}>
                                        Né à Kinshasa, République démocratique du Congo. Il a immigré au Canada pour des raisons d'études, depuis 2007. Il est titulaire d'un diplôme collégial en sciences sociales, d'un double BA en études internationales et en droit et en pensée sociale. Il vient d'obtenir sa maîtrise en droit international et transnational. Il est activement impliqué dans sa communauté. Intéressé par les droits de l'homme, le droit international humanitaire, la justice pénale internationale, les droits des femmes et le développement durable. Il a publié, en tant que co-auteur, une collection de poèmes intitulés "anthologie de la poésie africaine" en 2012. Et en 2015, il a publié un livre sur les droits des femmes rurales en Afrique subsaharienne.
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgFour"></div>
                                    <label>Mr. Emilio François, BA<br/> Conseiller Financier</label>
                                    <br/>
                                    <button onClick={this.handleShowBioFour}>lis moi</button>
                                    <p className={showDesFour}>
                                        M. Emilio François est conseiller financier de la Fondation Sylvenie Lindor . M. François a eu sa formation universitaire en Science et économique et l’Administration des affaires. M. François est un activiste communautaire très engage dans la communauté Haïtienne. <br />
                                        M. François est de plusieurs autres communautaires à travers lesquelles il contribue pour l’avancement de la communauté Haïtienne.  
                                    </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="bioBox">
                                    <div className="bioImg bioImgFive"></div>
                                    <label>Mr. Ari Korn, BA  <br/> Planificateur des Evènements</label>
                                    <br/>
                                    <button onClick={this.handleShowBioFive}>lis moi</button>
                                    <p className={showDesFive}>
                                        Me. Ari Korn est le planificateur des événements  de la Fondation Sylvenie Lindor . M. Korn est un musicien professionnel de Toronto. Son éducation est principalement en art culinaire et l’hospitalité. Il a obtenu son certificat du collège George Brown et a travaillé  pendant plusieurs années comme superviseur  de  service  à la clientèle et des activités dans un petit café français à Toronto. Il a organisé plusieurs évènements partout Ontario pour sa propre carrière  musicale et pour une organisation à but non lucratif consacré aux personnes en rétablissement d’alcoolisme et de la toxicomanie. Récemment gradué de l’Université York avec un diplôme en études anglaises, M. Korn compte déménager à Los Angeles en Californie, pour poursuivre sa carrière musicale au niveau professionnel.  
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgSix"></div>
                                    <label>Mme. Chrystal Smith <br/> MA ,Responable des Affaires Publique et des Affaires Francophone</label>
                                    <br/>
                                    <button onClick={this.handleShowBioSix}>lis moi</button>
                                    <p className={showDesSix}>
                                        Rédactrice et traductrice, Mlle Chrystal Smith est une spécialiste de la langue anglaise et est passionnée par la traduction française-anglaise. Sa formation générale comprend un diplôme et une maitrise en traductologie de l’Université York. Comme la responsable des affaires publique et affaires francophones FSL&CMJMF, elle réalise son aspiration de participer dans le développement des programmes de sensibilisation pour les jeunes à Toronto et nouveaux arrivants au Canada.  
                                    </p>
                                </div>
                                {/* <div className="bioBox">
                                    <div className="bioImg bioImgSeven"></div>
                                    <label>Mme. Fayse Lindor <br/> Offiicer de liaison communautaire</label>
                                    <br/>
                                    <button onClick={this.handleShowBioSeven}>lis moi</button>
                                    <p className={showDesSeven}></p>
                                </div> */}
                            </div>
                                <h2>Directeurs Exécutif</h2>
                                    <ul>
                                        <li>Mr. Daniel Steinhart</li>
                                        <li>Mr. Buner Fontaine</li>
                                        <li>Mme. Marie Michelle Simeon</li>
                                        <li>Mme. Marie Yannick Marcel</li>
                                        <li>Mme. Fayse Lindor</li>
                                        <li>Mme. Kanar Youssif</li>
                                    </ul>
                        </div>
                </section>
            </div>
) } } export default AboutFr