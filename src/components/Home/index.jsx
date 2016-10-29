import React, { Component } from 'react';
import { Link } from 'react-router';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import Banner from '../Banner';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

class Home extends Component {
  render() {

    const projectsMobileImage = require('../../img/projects-home-photo.jpg');
    const dennisAvatar = require('../../img/dennis-avatar.png');

    return (
      <div id="Home">
        <Sidebar />
        <TopBar />
        <div id="HomePage" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="Curated Resources for Humans"
            descriptionStyles="white-70"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-black" />

          <div id="Our-Projects" className="cf">
            <div>
              <img className="ma0 pa0 dn-l db" src={projectsMobileImage} alt="Workspace"/>
            </div>
            <div className="cf bg-near-white project-image">
              <div className="bg-near-white fl w-60-l w-100 ph6-l pv5-l pa5-m pa4">
                <h2 className="mb4 fw5 f3-ns f4 black lh-title">Our Projects</h2>
                <p className="fl lh-copy black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl vitae aliquet volutpat, diam leo scelerisque nulla, quis tempor elit dolor at ante. Suspendisse fringilla finibus elit vel aliquam. Nam blandit erat erat, aliquet blandit neque scelerisque ac.</p>
                <p className="fl mb5 lh-copy black-60">Phasellus non elementum ex. Morbi ullamcorper semper dolor, id varius lacus venenatis ac. Ut orci sem, ornare ac risus non, mollis posuere magna. Nam sit amet nisl feugiat, pulvinar metus a, pellentesque nisid varius lacus.</p>
                <Link className="fl f6 link dim br2 ph4 pv3 mb2 dib white bg-black" to="/projects">View Projects</Link>
              </div>
            </div>
          </div>

          <div id="About-Us" className="content-end bg-white db cf">
            <div className="bg-white fl w-60-l w-100 pl6-l pr5-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">About Us</h2>
              <p className="mb5 fl lh-copy black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl vitae aliquet volutpat, diam leo scelerisque nulla, quis tempor elit dolor at ante. Suspendisse fringilla finibus elit vel aliquam. Nam blandit erat erat, aliquet blandit neque scelerisque ac.</p>
              <Link className="fl f6 link dim br2 ph4 pv3 mb2 dib white bg-black" to="/about">Learn More</Link>
            </div>
            <div className="fr bg-white w-40-l w-100 pv5-l pa5-m pa4">
              <div className="mv5-l mt2 mb5 fl w-100">
                <div className="mr4 fl tc">
                  <img src={dennisAvatar}
                    className="fl bg-near-white br-100 h3 w3 dib" alt="avatar" />
                </div>
                <span className="db b lh-copy black">Dennis Cortés</span>
                <span className="db lh-copy black-60">Co-Founder of Quarry</span>
                <span className="db i lh-copy black-60">@fromcortes</span>
              </div>
              <div className="mb4 fl w-100">
                <div className="mr4 fl tc">
                  <img src={dennisAvatar}
                    className="fl bg-near-white br-100 h3 w3 dib" alt="avatar" />
                </div>
                <span className="db b lh-copy black">Drew Miller</span>
                <span className="db lh-copy black-60">Co-Founder of Quarry</span>
                <span className="db i lh-copy black-60">@joindrew</span>
              </div>
            </div>
          </div>

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Home;
