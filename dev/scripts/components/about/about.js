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
                            </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgOne"></div>
                                    <label>Amikley Fontaine <br/> Founder & CEO</label>
                                    <br/>
                                    <button onClick={this.handleShowBioOne}>Read more</button>
                                    <p className={showDesOne}>
                                    Amikley Fontaine is the Founder of the Sylvenie Lindor Foundation. A non-Profit Organisation that he names after his late Mother which is helping black Francophone Youth Overcoming social & linguistic barriers in Toronto. Through the works of his Foundation, Mr. Fontaine has implemented Haitian Youth Movement Toronto & Grenadiers Football Club. The Youth movement emulates the Slogan of: Soccer for Integration, Soccer for Social Cohesion aimed to help these youth integrate in the Queen City. <br/>  
                                    Amikley Fontaine is a native of Haiti.  He holds a Bachelor with Special honour in Philosophy along with two Certificates: One in Law & Social Thought and the other one in Bilingualism (French & English) from York University. Mr.Fontaine with the Sylvenie Lindor Foundation organises every year the Multicultural Forum as a mean to promote the Francophone Culture and reduce social barriers in Toronto. The Multicultural Forum is an annual Cultural Exchange and Dialogue between Youth of 16 years and older and the public in the GTA about many important topics that distinguish our lives as part of the Canadian society. Aiming to create integration in the context of cultural diversity, the Forum will help each community to explore the reality of the other. <br/>
                                    Through the works of his Foundation, Mr. Fontaine addresses ongoing issues like: Global Migration, Canadian Identity, Climate change, Inclusion & Integration of minority groups which have been debated in the Youth Multicultural Forum. Since last year, Mr.Fonatine as part of the Haitian Community of Toronto, has been advocating to the Canadian Government on behalf of Haitian Migrants in the United States who are fearing Trump deportation.  He has met with the three branches of the Government where he addressed the issues of the third safe country agreement which has made it difficult for Haitian asylum seekers to come to Ontario.  Along with the Sylvenie Lindor Foundation Team, He has met in March 2017 the United Nations High Commissioner for Refugees in Canada, Mr.Jean-Nicolas Beuze where he addressed the issues of Haitian Refugees trapped in Tijuana in North Mexico.<br /> 
                                    Mr. Fontaine is a lover of the Francophone Cultures. He believes that lack of opportunity in the Francophone Community has been a result of language barriers and therefore look for outcome that can enable Francophone Youth to succeed. In light of that, his foundation has established before and after school programs for students who need help in fostering their French language skills.  Along with the Foundation staff, he creates social activities like, Good Night, Exploration tours, movie night that allow new comer Francophones feel like they are home and explore Canadian horizons. <br/>
                                    Mr.Fontaine is also a Poet and author, he has recently published along with two founding members of his Foundation (Junior Mandoko & Chrystal Smith) a collection of poems titled “Being Black in Canada”  “Etre Noir au Canada”. In His book, Mr. Fontaine retraces the Contribution of black Canadians for a Canada that embraces diversity and equity.   He also addresses the question of systemic discrimination seeing as a major obstacle faced by the Francophone New Comer Youth in term of their integration and Inclusion.   Mr. Fontaine, serves as well an interpreter at the Canadian Border Services Agency (CBSA) where he assists Francophone asylum seekers. <br/>  
                                    Every year in February, with the Foundation, Mr. Fontaine celebrates black history month. In those events , he attempts to raise awareness to black Francophone Youth and pay tribute to Black Canadians who laid the Foundation. 
                                    </p>
                                </div>
                            <div className="container">
                                <div className="bioBox">
                                    <div className="bioImg bioImgTwo"></div>
                                    <label>Mr. Christopher Sullivan <br/> Director of Communications </label>
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
                                    <label>Mr. Junior Mandoko, MA <br/> Bongoy Public Outreach Ambassador</label>
                                    <br/>
                                    <button onClick={this.handleShowBioThree}>Read more</button>
                                    <p className={showDesThree}>
                                        Born in Kinshasa, Democratic Republic of Congo. He immigrated to Canada for reasons of study, since 2007. He holds a college degree in social science, a double BA in International Studies and Law and Social Thought. He recently just obtained his master's degree in international and transnational law. 
                                        He is actively involved in his community. Interested in human rights, international humanitarian law, international criminal justice, women's rights and sustainable development.</p>
                                </div>
                                <div className="bioBox">
                                    <div className="bioImg bioImgFour"></div>
                                    <label>Mr. Emilio François, BA<br/> Director of Finance</label>
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
                                    <label>Mrs. Chrystal Smith <br/> MA , Public Out reach Ambassador </label>
                                    <br/>
                                    <button onClick={this.handleShowBioSix}>Read more</button>
                                    <p className={showDesSix}>
                                        Chrystal Smith is a translator, reviser, and English language specialist who is passionate about French/English translation. Her academic background includes a BA and Masters in Translation Studies from York University. As the Director of Public and Francophone Affairs FSL&CMJMF, she assists in the development of outreach programs 
                                        for youth and new immigrants to Canada, a contribution to which she has always aspired.   
                                    </p>
                                </div>
                                {/* <div className="bioBox">
                                    <div className="bioImg bioImgSeven"></div>
                                    <label>Mrs. Fayse Lindor <br/> Community Liaison Officer</label>
                                    <br/>
                                    <button onClick={this.handleShowBioSeven}>Read more</button>
                                    <p className={showDesSeven}></p>
                                </div> */}
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