import React from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink } from 'react-router-dom';
import { ajax } from 'jquery';

import Landing from './components/landing/landing';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Sponsor from './components/sponsor/sponsor';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Landing />
                <About />
                <Sponsor />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));