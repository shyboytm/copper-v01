import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';

class Home extends Component {
  render() {

    const projectsMobileImage = require('../../img/projects-home-photo.jpg');
    const dennisAvatar = require('../../img/dennis-avatar.png');

    return (
      <div id="Home">
        <Sidebar />
        <TopBar />
        <div id="HomePage" className="mv0 fr w-80-l w-100 bg-white-ns bg-white">
          <div id="Banner" className="bg-black pa6-l pa5-m ph4 pv5">
            <div className="w-100">
              <h1 className="mt0 mb4 fw4 f2-ns f3 white t-tracking lh-title">
                Curated Resources <br className="dn-ns dib" />for Humans
              </h1>
              <p className="mb0 lh-copy measure white-70">
                We are a team of two that create simple, beautiful digital experiences
                and resources with the intention of organizing and curating some of the
                world's most popular online topics.
              </p>
            </div>
          </div>
          <div id="Our-Projects">
            <div>
              <img className="ma0 pa0 dn-l db" src={projectsMobileImage} alt="Workspace"/>
            </div>
            <div className="cf bg-near-white project-image">
              <div className="bg-near-white fl w-60-l w-100 ph6-l pv5-l pa5-m pa4">
                <h2 className="mb4 fw5 f3-ns f4 black lh-title">Our Projects</h2>
                <p className="fl lh-copy black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl vitae aliquet volutpat, diam leo scelerisque nulla, quis tempor elit dolor at ante. Suspendisse fringilla finibus elit vel aliquam. Nam blandit erat erat, aliquet blandit neque scelerisque ac.</p>
                <p className="fl mb5 lh-copy black-60">Phasellus non elementum ex. Morbi ullamcorper semper dolor, id varius lacus venenatis ac. Ut orci sem, ornare ac risus non, mollis posuere magna. Nam sit amet nisl feugiat, pulvinar metus a, pellentesque nisid varius lacus.</p>
                <a className="fl f6 link dim br2 ph4 pv3 mb2 dib white bg-black" href="#0">View Projects</a>
              </div>
            </div>
          </div>
          <div id="About-Us" className="content-end bg-white">
            <div className="bg-white fl w-60-l w-100 pl6-l pr5-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">About Us</h2>
              <p className="mb5 fl lh-copy black-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, nisl vitae aliquet volutpat, diam leo scelerisque nulla, quis tempor elit dolor at ante. Suspendisse fringilla finibus elit vel aliquam. Nam blandit erat erat, aliquet blandit neque scelerisque ac.</p>
              <a className="fl f6 link dim br2 ph4 pv3 mb2 dib white bg-black" href="#0">Learn More</a>
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
        </div>
      </div>
    );
  }
}

export default Home;
