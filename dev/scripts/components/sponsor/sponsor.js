import React from 'react'; 

class Sponsor extends React.Component { 
    render () { 
        return (
            <div>
                <section id="sponsor" className='sponsor'>
                    <div className="wrapper">
                        <h1>Sponsorship</h1>
                        <p>
                            The Sylvenie Lindor Foundation & Jean Marcelin Fontaine Multicultural Centre Inc. 
                            Would like to express its tremendous gratitude to all Public, Private and Community 
                            Sponsors that help us realize our mandate, mission and objectives.
                        </p>
                        <div className="container">
                                <div className="imgBox">
                                    <div className="sponsorLogo sLogoOne"></div>
                                    <div className="sponsorLogo sLogoTwo"></div>
                                    <div className="sponsorLogo sLogoThree"></div>
                                    <div className="sponsorLogo sLogoFour"></div>
                                    <div className="sponsorLogo sLogoFive"></div>
                                    <div className="sponsorLogo sLogoSix"></div>
                                </div>
                        </div>
                                <h2>Comunity Sponsors</h2>
                                    <ul className="communitySponsors">
                                        <li>La Maison d’Hait du Grand Toronto</li>
                                        <li>La Communauté Hatienne Unie de l’Ontario</li>
                                        <li>Grenadiers Football Club</li>
                                        <li>Haitian Youth Movement Toronto</li>
                                        <li>le Consulat d’Haiti à Toronto</li>
                                        <li>Balinguallink</li>
                                        <li>The Somalian Community of North Etobicoke</li>
                                        <li>The Congolese Community</li>
                                        <li>13ème Option pour le developpemen</li>
                                    </ul>
                        <h2>
                            Your support is greatly appreciated!
                        </h2>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input name="cmd" type="hidden" value="_s-xclick"/>
                                <input name="hosted_button_id" type="hidden" value="SG6LQ3UC3KR84"/> 
                                <button className="donate">
                                Donate Now
                                </button>   
                            </form>
                    </div>
                </section>
            </div>
) } } export default Sponsor