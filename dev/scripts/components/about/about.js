import React from 'react'; 

class About extends React.Component { 
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
                <section id="about" className="about">
                    <div className="wrapper">
                        <h1>About Us</h1>
                        <div className="container">
                            <div className="textBox">
                                <h2>History</h2>
                                <p>
                                    The SFL&CMJMF is a Non-Profit Organization founded by Amikley Fontaine after his late Mother Sylvenie Lindor, 
                                    the foundation is supported by Family Members, Friends, and the Board of Directors.
                                </p>
                            </div>
                            <div className="textBox">
                                <h2>Mandate</h2>
                                <p>
                                    To work with youth of Haitian background and other Francophone youth to help them develop leadership skills to better integrate to Canadian life.
                                    Through its program ACT ( ACTION and CHANGE for a better TOMORROW).
                                </p>
                            </div>
                            <div className="textBox">
                                <h2>Mission</h2>
                                <p>
                                    The mission is to promote multiculturalism through helping visible minority groups: youth, adults, and different communities to aid in their
                                    integration, by exposing each culture to the other to initiate dialogue and intercultural exchange.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                        <section id="team">
                            <div className="wrapper">
                            <h1>Our Team</h1>
                            <div className="container">
                            <p>
                                The Sylvenie Lindor Foundation has emerged as means toward helping Black francophone Youth succeed in overcoming 
                                social & Linguistics barriers in the City of Toronto.  We use soccer and Youth dialogue for Integration, Inclusion and Social Cohesion that 
                                enable Youth exploring opportunities 
                            </p>
                            </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgOne"></div>
                                    <label>Amikley Fontaine <br/> Founder & CEO</label>
                                    <br/>
                                    <button onClick={this.handleShowBioOne}>Read more</button>
                                    <p className={showDesOne}>
                                        Amikley Fontaine is the Founder of the Sylvenie Lindor Foundation. A non-Profit Organization that he names after 
                                        his late Mother which is helping black Francophone Youth Overcoming social & linguistic barriers in Toronto.
                                        Mr.Fontaine with the Sylvenie Lindor Foundation organizes every year the Multicultural Forum as a mean to promote the Francophone Culture and reduce social barriers in Toronto. 
                                    </p>
                                </div>
                            <div className="container">
                                <div className="bioBox">
                                    <div className="bioImg bioImgTwo"></div>
                                    <label>Christopher Sullivan <br/> Director of Communications </label>
                                    <br/>
                                    <button onClick={this.handleShowBioTwo}>Read more</button>
                                    <p className={showDesTwo}>
                                        Christopher Sullivan is currently completing his masters degree in legal theory and 
                                        commencing studies for his Juris Doctor degree. Christopher Sullivan has 
                                        become more involved with the Fondation over the past few years, and more understanding of the needs of the Haitian community, both here in this city, and elsewhere--especially in the case where they are migrants seeking to come to Canada
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgThree"></div>
                                    <label>Junior Mandoko, MA <br/> Bongoy Public Outreach Ambassador</label>
                                    <br/>
                                    <button onClick={this.handleShowBioThree}>Read more</button>
                                    <p className={showDesThree}>
                                        Born in Kinshasa, Democratic Republic of Congo. He immigrated to Canada for reasons of study, since 2007. He holds a college degree in social science, a double BA in International Studies and Law and Social Thought. He recently just obtained his master's degree in international and transnational law. 
                                        He is actively involved in his community. Interested in human rights, international humanitarian law, international criminal justice, women's rights and sustainable development.</p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgFour"></div>
                                    <label>M. Emilio François, BA<br/> Director of Finance</label>
                                    <br/>
                                    <button onClick={this.handleShowBioFour}>Read more</button>
                                    <p className={showDesFour}>
                                        Mr. Emilio François is the Financial Advisor of the Sylvenie Lindor Foundation & Jean Marcelin Fontaine  Centre for Multiculturalism Inc. 
                                        His academic background is in Economics and Business Administration. He is actively engaged in the Haitian community and works along with several other communities for the advancement of the Haitian diaspora in Canada.
                                    </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="bioBox">
                                    <div className="bioImg bioImgFive"></div>
                                    <label>Mr. Ari Korn, BA  <br/> Event Planer</label>
                                    <br/>
                                    <button onClick={this.handleShowBioFive}>Read more</button>
                                    <p className={showDesFive}>
                                        Mr. Ari Korn is the Event Planner for the FSL& CMJMF. Mr.Korn is a professional musician from Toronto. His background is originally in the Culinary and Hospitality Industry. He attained a Culinary Arts Certificate from George Brown College and worked for a number of years aiding to oversee both service and business 
                                        operations of a small French Café. He has executed events across Ontario for both his own music career and for a non-profit organization focused on producing sober events for people recovering from alcoholism and drug addiction. Most recently, he has graduated with a BA in English from York University's Glendon College 
                                        and will be moving to Los Angeles, California to pursue the Music Industry at a professional level. 
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgSix"></div>
                                    <label>Chrystal Smith <br/> MA , Public Out reach Ambassador </label>
                                    <br/>
                                    <button onClick={this.handleShowBioSix}>Read more</button>
                                    <p className={showDesSix}>
                                        Chrystal Smith is a translator, reviser, and English language specialist who is passionate about French/English translation. Her academic background includes a BA and Masters in Translation Studies from York University. As the Director of Public and Francophone Affairs FSL&CMJMF, she assists in the development of outreach programs 
                                        for youth and new immigrants to Canada, a contribution to which she has always aspired.   
                                    </p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgSeven"></div>
                                    <label>Mrs Fayse Lindor <br/> Community Liaison Officer</label>
                                    <br/>
                                    <button onClick={this.handleShowBioSeven}>Read more</button>
                                    <p className={showDesSeven}></p>
                                </div>
                            </div>
                                <h2>Excutive team</h2>
                                    <ul>
                                        <li>Mr. Daniel Steinhart</li>
                                        <li>Mr. Buner Fontaine</li>
                                        <li>Mrs. Marie Michelle Simeon</li>
                                        <li>Ms. Marie Yannick Marcel</li>
                                        <li>Mrs. Fayse Lindor</li>
                                        <li>Mrs. Kanar Youssif</li>
                                    </ul>
                        </div>
                </section>
            </div>
) } } export default About