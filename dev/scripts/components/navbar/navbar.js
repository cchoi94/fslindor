import React from 'react'; class Navbar extends React.Component { render () { return (

<div>
    <div className="navbar">
        <div className="logo"></div>
        <div className="socialLinks"></div>
    </div>
    <div className="navLinks">
        <ul>
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
    </div>
</div>
) } } export default Navbar