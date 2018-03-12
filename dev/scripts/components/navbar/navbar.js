import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom';
    
import EventsPrograms from '../eventsPrograms/eventsPrograms';
import App from '../../app';    
    

class Navbar extends React.Component { 
    render () { 
        return (
                <div>
                    <div className="navbar">
                            <img className="logo" src="/assets/images/logo.png" alt="logo"/>
                                <ul className="navLinks">
                                    <a href="#home">
                                        <li>
                                            Home
                                        </li>
                                    </a>
                                    <a href="#about">
                                        <li>
                                            About Us
                                        </li>
                                    </a>
                                    <a href="#team">
                                        <li>
                                            Team
                                        </li>
                                    </a>
                                    <a>
                                        <li>
                                        <Link to="/eventsProgram">Events and Programs</Link>
                                        </li>
                                    </a>
                                    <a href="#sponsor">
                                        <li>
                                            Become a Supporter
                                        </li>
                                    </a>
                                    <a href="#contact">
                                        <li>
                                            Contact Us
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
                        </div>
                </div>
) } } export default Navbar