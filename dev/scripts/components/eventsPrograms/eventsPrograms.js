import React from 'react';
import ReactDOM from 'react-dom'
import { 
    BrowserRouter as Router, 
    Route, Link, NavLink, Switch } from 'react-router-dom'; 

class EventsPrograms extends React.Component { 
    render () { 
        return (
            <div>
                <section id="eventsPrograms" className='eventsPrograms'>
                    <div className="wrapper">
                        <h1>Events & Programs</h1>
                        <div className="container">
                            <h2>Multicultural Forum</h2>
                            <p>
                                Is an annual Cultural Exchange and Dialogue between Youth 18 years and older and the public in the GTA about many important topics that distinguish our lives as part of the Canadian society. Aiming to create integration in the context of cultural diversity, the Forum will help each community to explore the reality of the other. The topic changes each year. During the Multicultural Forum, each community presents a particular aspect of 
                                their culture that enables exchanges though exposition.
                            </p>
                            <div className="container">
                                <img src="/assets/images/mediaImages/TAMOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/TAMTwo.png" alt=""/>
                            </div>
                            <div className="container">
                                <img src="/assets/images/mediaImages/TAMThree.png" alt=""/>
                                <img src="/assets/images/mediaImages/TAMFour.png" alt=""/>
                            </div>
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
                            <div className="container">
                                <img src="/assets/images/mediaImages/francImmOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/francImmTwo.png" alt=""/>
                            </div>
                            <div className="container">
                                <img src="/assets/images/mediaImages/francImmThree.png" alt=""/>
                                <img src="/assets/images/mediaImages/francImmFour.png" alt=""/>
                            </div>
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
                                We use soccer as a means toward helping youth integrate and as well for fun. The participation of youth in the 
                                soccer field help them developing networking with youth from variety communities. 
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
                            <h2>Sponsorship Programs for Children in Haiti <br/> Launched in September 2014</h2>
                            <p>
                                Through the sponsorship Program the Foundation assists 50 Children in need in Haiti.  
                                Help us help a child Succeed through Education- Help us inspire this new generation. 
                            </p>
                        </div>
                        <div className="container">
                            <h2>Boys and Girls Club Haiti</h2>
                            <p>
                                Boys and Girls Club in Haiti – A place for Youth in Haiti to be creative – to take action for change. Through ACT- Action to Change Tomorrow, the Foundation organizes workshops that enable 
                                Youth in Haiti understanding the global world challenges and to contribute to changing them.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Good night</h2>
                            <p>
                                This is a night where the Haitian youth and the Grenadier Fc gather for social interacting.  Good Night is held once a month.  During that night the Youth watch a movie or documentary together 
                                and reflect on it.  The night is entertained by Music and refreshment is served. 
                            </p>
                        </div>
                        <div className="container">
                            <h2>Canadian Tours</h2>
                            <p>
                                We do organize Canadian Tours not only for fun but to help youth understand Canadian history. 
                                We do visit Canadian touristic sites and museums.  An approach   to understand those who paved the 
                                way before us for a Canada that embrace diversity
                            </p>
                        </div>
                    </div>
                </section>
            </div>
) } } export default EventsPrograms