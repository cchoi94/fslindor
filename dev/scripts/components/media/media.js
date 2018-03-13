import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom'; 
    

class Media extends React.Component { 
    render () { 
        return (
                <div>
                    <section id="media" className="media">
                        <div className="wrapper">
                            <h1>Media</h1>
                            <h2>
                                Visit to Legislative assembly of Ontario with Honourable Shafiq Qaadri MPP  of North Etobicoke
                            </h2>
                            <div className="container">
                                <img src="/assets/images/mediaImages/legAssemOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/legAssemTwo.png" alt=""/>
                            </div>
                            <div className="container">
                                <img src="/assets/images/mediaImages/legAssemThree.png" alt=""/>
                                <img src="/assets/images/mediaImages/legAssemFour.png" alt=""/>
                            </div>
                            <h2>
                                Meeting with the Canadian Government & United nations High commissioner for refugees in Canada  with Regards to the Haitian Migrants 
                            </h2>
                            <div className="container">
                                <img src="/assets/images/mediaImages/canGov.png" alt=""/>
                                <img src="/assets/images/mediaImages/canGovTwo.png" alt=""/>
                            </div>
                            <div className="container">
                                <img src="/assets/images/mediaImages/canGovThree.png" alt=""/>
                                <img src="/assets/images/mediaImages/canGovFour.png" alt=""/>
                            </div>
                        </div>
                    </section>
                </div>
) } } export default Media