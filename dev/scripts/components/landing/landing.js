import React from 'react';
import Slider from 'react-slick'

class Landing extends React.Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          className: 'carousel',
          autoplay: true,
          autoplaySpeed: 3000
        };
        return (
          <div>
            <section id="home">
              <Slider {...settings}>
                <div className='logo-slide slideOne'>
                </div>
                <a href="http://lemetropolitain.com/un-forum-pour-faire-du-multiculturalisme-une-force/">
                  <div className='logo-slide slideTwo'>
                      <h3>Multicultural Forum of Canadian Identity and Inclusion: <br></br> A Force for Multiculturalism</h3>
                  </div>
                </a>
                <a href="https://l-express.ca/des-jeunes-issus-de-limmigration-ont-discute-didentite-canadienne/">
                  <div className='logo-slide slideThree'>
                      <h3>Young Immigrants Discuss Canadian Identity at the 3rd Multicultural Canadian Identity Forum & Inclusion</h3>
                  </div>
                </a>
                <a href="https://onfr.tfo.org/migrants-haitiens-nous-navons-pas-de-reponse/">
                  <div className='logo-slide slideFour'>
                      <h3>GST deadline for Haitians in the US in January 2018 - <br></br> An Appeal to the Ontario Government</h3>
                  </div>
                </a>
                <a href="https://onfr.tfo.org/demandeurs-dasile-haitiens-linaction-de-lontario-denoncee/">
                  <div className='logo-slide slideFive'>
                      <h3>60 thousand Haitians are threatened with being deported to Haiti in January 2018. Could Ontario reach out to them?</h3>
                  </div>
                </a>
              </Slider>
            </section>
          </div>
        );
      }
}

export default Landing