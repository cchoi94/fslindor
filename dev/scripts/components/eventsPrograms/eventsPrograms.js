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
                            <div className="container spaceAround">
                                <img src="/assets/images/mediaImages/TAMOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/TAMThree.png" alt=""/>
                            </div>
                            <div className="container rmf">
                                <h4>Recent Multicultural Forums</h4>
                                <ul>
                                    <li>First Multicultural Forum: Civic Rights and Integration –August 22, 2015</li>
                                    <li>Second Annual Multicultural Forum: Climate Change & Integration- August 19th, 2016</li>
                                    <li>Third Annual Multicultural Forum:  Canadian Identity & Inclusion – September 9th, 2017</li>
                                    <li>Fourth Annual Multicultural Forum: Canadian Democratic Values & Global Migration -<strong> Press release & Flyer will be sent out shortly </strong> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Black History Month</h2>
                            <p>
                            Every year in February, across the country, Canadians celebrate Black History Month. During this month all black communities reflect on the contribution of Canadians of African descent , an act that symbolizes their legacy for a Canada that embraces diversity and equal opportunity. During this month all Canadians are called to take part in celebrations and activities that honor the heritage of black Canadians and those of the present day who paved the way to bring awareness to the black community.
                            The celebration of Black History Month began in Canada in 1970. Back then, it was known as black history week or Negro history week. The focus of this week was on accomplishment as well as showing that black history was crucial to safeguarding the physical and cultural endurance of the race within a wider society. In 1976, the name changed to Black History Month. It is commemorated in Canada, the United States and in the United Kingdom as an annual observance for the remembrance of important events and the African diaspora.
                            In 1995, the House of Commons formally acknowledged February as Black History Month after a motion presented by Member of Parliament, Jean Augustine. The Honourable Jean Augustine was the first black Canadian Woman elected to Parliament. She represented the riding of Etobicoke and Lakeshore in Ontario. The motion was approved unanimously by the House of Commons.
                            A Rich and Proud History of The Sylvenie Lindor Foundation is proud to celebrate the contribution of all Black Canadians and their vibrant role in heightening awareness among black communities across the country. With this in mind, we emphasize the cultural diversity and richness brought by all back communities that creates integration and social cohesion. During Black History Month, we strive to raise consciousness among black Canadian youth, and to encourage them to work hard for a bright future and to acknowledge the contribution of those who laid the foundation before them.
                            </p>
                        </div>
                        <div className="container">
                            <h2>Francophone Immigration</h2>
                            <p>
                                The Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre considers education on Francophone Immigration as a main tool that helps Francophone Immigrants to integrate into Canadian life and to get settled into the society. At the Sylvenie Lindor Foundation &Jean Marcelin Fontaine Multicultural Centre we recognize the contribution of each cultural group to make up a vibrant and welcoming community. The National Week of Francophone Immigration is celebrated the first week of November of each year. Across the country, Francophones and Acadians gather together to celebrate this heritage.
                            </p>
                            <div className="container">
                                <img src="/assets/images/mediaImages/francImmOne.png" alt=""/>
                                <img src="/assets/images/mediaImages/francImmTwo.png" alt=""/>
                            </div>
                        </div>
                        <div className="container">
                            <h2>Haitian Youth Movement Canada (HYMC)</h2>
                            <p>
                            Haitian Youth Movement Canada (HYMC): A place for youth to take action for change – We provide Mentorship through our – Soccer Club, Sports against Violence and Sports for Integration groups. At the HYMC, the Sylvenie Lindor Foundation is working with Haitian Youth, Francophone and all young adults in the GTA to help them develop the leadership skills they need to succeed.
                            </p>
                            <h2> Toronto  United Football  Club ( TUFC)</h2>
                            <p>
                                <strong>History: </strong> The Toronto United Football Club was established in Toronto in October 2014. The Club is composed of male athletes. The Club is part of the Haitian Youth Movement Canada which is an entity of the Sylvenie Lindor Foundation. The Haitian Youth Movement Canada is a place for youth to take action and develop leadership skills they need in whatever paths they chose to follow in life. With the Slogan: <strong> Soccer for Integration – Soccer Social Cohesion, </strong> the Club implements all programs to help the athletes succeed not only in the soccer field but in life in general. The Soccer Club is comprised of male athletes from a variety cultural of backgrounds. The Toronto United Football Club is a non-profit association. The Club is administered by 5 board directors and 10 Executives directors. The Club is sustained by the Sylvenie Lindor Foundation, the Haitian Youth Movement Canada and the Haitian Community of Toronto.
                            </p>
                            <h2>Bursaries</h2>
                            <p>
                            The Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre Inc. is always looking for opportunities that enable youth to excel in their careers. To this end, we provide Scholarship to students in their first year of College or University. The Scholarship is based on the youth leadership and involvement and achievement in the community.
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
                            <h2>Grenadiers Football Club</h2>
                            <p>
                                <strong>History: </strong> The Grenadiers Football Club was established in Toronto in October 2013. The Club is composed of male athletes. The Club is part of the Haitian Youth Movement Canada which is an entity of the Sylvenie Lindor Foundation. The Haitian Youth Movement Canada is a place for youth to take action and develop leadership skills they need in whatever paths they chose to follow in life. With the Slogan: <strong> Soccer for Integration – Soccer for  Social Cohesion, </strong> the Club implements all programs to help the athletes succeed not only in the soccer field but in life in general. The Soccer Club is comprised of male athletes from a variety cultural of backgrounds. The Toronto United Football Club is a non-profit association. The  Grenadiers Football Club is sustained by the Sylvenie Lindor Foundation  and the Haitian Youth Movement Canada 
                            </p>
                            <h2>List of the registered players of the Grenadiers  Football Club</h2>
                                <div className="soccerNamesContainer">
                                
                                <div className="soccerPlayerNames">
                                    <label>First Name</label>
                                    <label>Last Name</label>
                                    <label>Position</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Jean Yves</label>
                                    <label>Ducé</label>
                                    <label>Captain</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Lucnor</label>
                                    <label>Louis</label>
                                    <label>Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Justin</label>
                                    <label>Lee</label>
                                    <label>Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Justin</label>
                                    <label>Phillipphe</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Lathory</label>
                                    <label>Ducé</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Bruce</label>
                                    <label>Akaraza</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Haman</label>
                                    <label>Noori</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Yvenson</label>
                                    <label>Ducé</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Jerry</label>
                                    <label>Lafontan</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Alfredo</label>
                                    <label>Delisma</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Wilson</label>
                                    <label>Akolic</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Greggy</label>
                                    <label>Balan</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Sondy</label>
                                    <label>Pierre</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Miley</label>
                                    <label>Saint Juste</label>
                                    <label>	Goal Keeper</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stanley</label>
                                    <label>Romulus</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Bruce</label>
                                    <label>Alwayne</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stephane</label>
                                    <label>Tapegon</label>
                                    <label>Defence</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Emmanuel</label>
                                    <label>Oduro Yedoha</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Natan</label>
                                    <label>Clayton</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Natanael</label>
                                    <label>Brutus</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Ozcan</label>
                                    <label>Mustafa</label>
                                    <label>Striker</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Charles</label>
                                    <label>Mubarik</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Luckson</label>
                                    <label>Louis</label>
                                    <label>Middle</label>
                                </div>
                                <div className="soccerPlayerNames">
                                    <label>Stephane</label>
                                    <label>Marcel</label>
                                    <label>Middle</label>
                                </div>
                                </div>
                            <div className="container soccerClubImg">
                                <img src="/assets/images/mediaImages/soccerClub.png" alt=""/>
                            </div>
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
                                Sponsorship and Education plan in Haiti – This program was launched in September 2015. It has enabled us to provide school supplies and financial assistance to Children in need in Haiti. We have now 30 children in the program but more than 50 are already waiting for assistance. All school supplies are bought in Haiti in an aim to stimulate growth of the Haitian economy.
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
                            <h2>Trip to Haiti - Visit to Primary and secondary school in Haiti - January 2016</h2>
                            <p>
                                Boys and Girls Club in Haiti – A place for Youth in Haiti to be creative – to take action for change. Through ACT- Action to Change Tomorrow, the Foundation organizes workshops that enable 
                                Youth in Haiti understanding the global world challenges and to contribute to changing them.
                            </p>
                            <div className="container">
                                <img src="/assets/images/mediaImages/tripToHaiti.png" alt=""/>
                                <img src="/assets/images/mediaImages/tripToHaitiTwo.png" alt=""/>
                            </div>
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