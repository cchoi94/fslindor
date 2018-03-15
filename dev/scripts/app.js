import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import { 
//     BrowserRouter as Router, 
//     Route, Link, NavLink, IndexRoute } from 'react-router-dom';
import { ajax } from 'jquery';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/landing/landing';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Sponsor from './components/sponsor/sponsor';
import Contact from './components/contact/contact';
import EventsPrograms from './components/eventsPrograms/eventsPrograms';
import Media from './components/media/media';

class App extends React.Component {
    render() {
        return (
            <div>
                <Landing />
                <About />
                {/* <EventsPrograms /> */}
                {/* <Media /> */}
                {/* <Sponsor /> */}
                <Contact />
            </div>
        )
    }
}

ReactDOM.render(
<BrowserRouter>
    <div>
        <Route exact path='/' component={App}/>
        <Route path='/eventsPrograms' component={EventsPrograms}/>
        <Route path='/media' component={Media}/>
        <Route path='/sponsor' component={Sponsor}/>
    </div>

</BrowserRouter>,
document.getElementById('app'));
