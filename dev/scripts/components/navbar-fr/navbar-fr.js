import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';

class NavbarFr extends React.Component { 
    constructor() {
        super();
        this.state = {
            showHam: true,
            showHamIcon: false,
            showXIcon: false,
        };

        this.handleShowHam = this.handleShowHam.bind(this);
        this.handleShowHamIcon = this.handleShowHamIcon.bind(this);

    }

    handleShowHam(e) {
        let toggleHam = !this.state.showHam;
        let toggleHamIcon = !this.state.showHamIcon;
        this.setState ({
            showHam: toggleHam,
            showHamIcon: toggleHamIcon
        })
    }

    handleShowHamIcon(e) {
        let toggleHamIcon = !this.state.showHamIcon
        this.setState ({
            showHamIcon: toggleHamIcon
        })
    }

    render () { 

        let showHam = (this.state.showHam) ? 'navbarHidden' : 'navbar';
        let showHamIcon = (this.state.showHamIcon) ? 'hidden' : 'hamburgerIcon';

        return (
                <div>
                    <div className="languageBox">
                        <button>
                            <a onClick={this.handleShowHam} href="/">English</a>
                        </button>
                        <button>
                            <a onClick={this.handleShowHam} href="/fr">Francais</a>
                        </button>
                    </div>
                    <div className={showHam}>
                            <img className="logo" src="/assets/images/logo.png" alt="logo"/>
                                <ul className="navLinks">
                                    <a onClick={this.handleShowHam} href="/fr">
                                        <li>
                                            Acceuil
                                        </li>
                                    </a>
                                    <a onClick={this.handleShowHam} href="#aboutFr">
                                        <li>
                                            Qui Sommes-nous
                                        </li>
                                    </a>
                                    <a onClick={this.handleShowHam} href="#teamFr">
                                        <li>
                                            Notre équipe
                                        </li>
                                    </a>
                                    <a onClick={this.handleShowHam} href="/eventsProgramsFr">
                                        <li>
                                            Événements & programmes
                                        </li>
                                            {/* <div className="subNavLinks">
                                                <a href="#">Link 1</a>
                                            </div> */}
                                    </a>
                                    {/* <a onClick={this.handleShowHam} href="media">
                                        <li>
                                            Media
                                        </li>
                                    </a> */}
                                    <a onClick={this.handleShowHam} href="/sponsorFr">
                                        <li>
                                            Supporter la cause
                                        </li>
                                    </a>
                                    <a onClick={this.handleShowHam} href="#contactFr">
                                        <li>
                                            Contactez
                                        </li>
                                    </a>
                                </ul>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                    <input name="cmd" type="hidden" value="_s-xclick"/>
                                    <input name="hosted_button_id" type="hidden" value="SG6LQ3UC3KR84"/> 
                                    <button className="donate">
                                    Donate Now
                                    </button>   
                                </form>
                                <h4 onClick={this.handleShowHam} className='xHamIcon'>X</h4>
                        </div>
                    <div onClick={this.handleShowHam} className={showHamIcon} alt=""/>
                </div>
) } } export default NavbarFr