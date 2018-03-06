import React from 'react'; 

class Navbar extends React.Component { 
    render () { 
        return (
            <div>
                <div className="navbar">
                        <img className="logo" src="/assets/images/logo.png" alt="logo"/>
                            <ul className="navLinks">
                                <a href="">
                                    <li>
                                        Home
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        About Us
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        Events and Programs
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        Media
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        Become a Supporter
                                    </li>
                                </a>
                                <a href="">
                                    <li>
                                        Contact Us
                                    </li>
                                </a>
                            </ul>
                        <a href="https://www.paypal.com/donate/?token=ei9iVHMumGzLXArcHZR8XGNRZTJBCgUEFv_r0mlqjLwTiZlotZ8HLmXnLjlI4Tqx1Mbs_W&country.x=CA&locale.x=CA">
                            <button className="donate">
                                Donate
                            </button>
                        </a>
                    </div>
            </div>
) } } export default Navbar