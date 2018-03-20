import React from 'react'; 

class ContactFr extends React.Component { 
    render () { 
        return (
            <div>
                <section id="contactFr" className='contact'>
                    <div className="wrapper">
                        <h1>Contactez</h1>
                        <p>
                            Voulez-vous faire du Bénévolat? Voulez-vous joindre le mouvement des jeunes? 
                            Voulez-vous devenir un donateur? Voulez-vous devenir un partenaire?
                        </p>
                        <h2>
                            Entrez en contact avec nous par email et les médias sociaux! 
                        </h2>
                        <div className="imgBox">
                        <a href="mailto:info@fslindor.ca/">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/www.fslindor.ca/">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        </div>
                    </div>
                </section>
            </div>
) } } export default ContactFr