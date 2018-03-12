import React from 'react'; 

class Contact extends React.Component { 
    render () { 
        return (
            <div>
                <section id="contact" className='contact'>
                    <div className="wrapper">
                        <h1>Contact Us</h1>
                        <p>
                            Are you interested in becoming a volunteer? Are you interested
                            in joining the Haitian Youth Movement Canada? Are you 
                            interested in becoming a donor? Are you interested in 
                            becoming a sponsor?
                        </p>
                        <h2>
                            Get in touch with us by email and social media! 
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
) } } export default Contact