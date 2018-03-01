import React from 'react'
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink } from 'react-router-dom';
import { ajax } from 'jquery';

import Landing from './components/landing/landing';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React! Stuff Works</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));