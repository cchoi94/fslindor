import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom'; 

class EventsPrograms extends React.Component { 
    render () { 
        return (
            <div>
                <section className='eventsPrograms'>
                    <div className="wrapper">
                        <h1>Events & Programs</h1>
                        <div className="container">
                            <h2>Multicultural Forum</h2>
                            <p>
                                Is an annual Cultural Exchange and Dialogue between Youth 18 years and older and the public in the GTA about many important topics that distinguish our lives as part of the Canadian society. Aiming to create integration in the context of cultural diversity, the Forum will help each community to explore the reality of the other. The topic changes each year. During the Multicultural Forum, each community presents a particular aspect of 
                                their culture that enables exchanges though exposition.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Black History Month</h2>
                            <p>
                                Every year in February, the Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre recognizes the contribution of all who paved the way before us. As well, we reflect on their legacy and 
                                on how we can overcome challenges in our lives and within the society.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Francophone Immigration</h2>
                            <p>
                                The Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre considers education on Francophone Immigration as a main tool that helps Francophone Immigrants to integrate into Canadian life and to get settled into the society. At the Sylvenie Lindor Foundation &Jean Marcelin Fontaine Multicultural Centre we recognize the contribution of each cultural group to make up a vibrant and welcoming community. The National Week of Francophone Immigration is celebrated the first week of November of each year. 
                                Across the country, Francophones and Acadians gather together to celebrate this heritage.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Haitian Youth Movement Canada (HYMC)</h2>
                            <p>
                                Haitian Youth Movement Canada (HYMC): A place for youth to take action for change – We provide Mentorship through our – Soccer Club, Sports against Violence and Sports for Integration groups. At the HYMC, the Sylvenie Lindor Foundation is working with Haitian Youth, Francophone and all young adults in the GTA to help them 
                                develop the leadership skills they need to succeed.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Youth Entrepreneurship program</h2>
                            <p>
                                Youth Entrepreneurship program: we work closely with young adults 
                                and guide them based on their dreams and aspiration though workshops, seminars and after school programs.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Soccer Club</h2>
                            <p>
                                Toronto United Football Club is part of the Haitian Youth Movement Canada. 
                                The Soccer team is comprised of male athletes from a variety cultural of backgrounds.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Bursaries</h2>
                            <p>
                                The Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre Inc. 
                                is always looking for opportunities that enable youth to excel in their careers. To this end, we provide Scholarship to students in their first year of College or University. The Scholarship is based on the youth leadership and involvement and achievement in the community.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Sponsorship and Education plan in Haiti</h2>
                            <p>
                                Sponsorship and Education plan in Haiti – This program was launched in September 2015. It has enabled us to provide school supplies and financial assistance to Children in need in Haiti. We have now 30 children in the program but more than 50 are already waiting for assistance. 
                                All school supplies are bought in Haiti in an aim to stimulate growth of the Haitian economy.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Boys and Girls Club Haiti</h2>
                            <p>
                                Boys and Girls Club in Haiti – A place for Youth in Haiti to be creative – to take action for change. Through ACT- Action to Change Tomorrow, the Foundation organizes workshops that enable 
                                Youth in Haiti understanding the global world challenges and to contribute to changing them.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
) } } export default EventsPrograms