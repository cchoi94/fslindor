import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, IndexRoute } from 'react-router-dom';
import { ajax } from 'jquery';

import Landing from './components/landing/landing';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Sponsor from './components/sponsor/sponsor';
import Contact from './components/contact/contact';
import EventsPrograms from './components/eventsPrograms/eventsPrograms';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
                <About />
                <Sponsor />
                <Contact />
            </div>
        )
    }
}

class EventsProgramsPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <EventsPrograms />
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={Home} />
        {/* <Route path="/eventsPrograms" component={EventsProgramsPage}/> */}
    </Router>,
    document.getElementById('app')
);

{/* <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/users" component={UsersPage} />
    </Route> */}