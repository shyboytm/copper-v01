import React, { Component } from 'react';

import Sidebar from '../../assets/Sidebar';
import TopBar from '../../assets/TopBar';
import Banner from '../../assets/Banner';
import ContactUs from '../../assets/ContactUs';
import Footer from '../../assets/Footer';

class About extends Component {
  render() {
    return (
      <div id="About">
        <Sidebar />
        <TopBar />
        <div id="About-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="About Us"
            descriptionStyles="white-70"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-blue" />

          <div id="Transparency">
            <div className="ph6-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Transparency</h2>
              <div className="cf">
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f6 f5-ns ml0 blue">Projects</dd>
                  <dd className="f3 f2-ns b ml0">7</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f6 f5-ns ml0 light-purple">Hrs worked</dd>
                  <dd className="f3 f2-ns b ml0">620~</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f6 f5-ns ml0 green">Hrs per week</dd>
                  <dd className="f3 f2-ns b ml0">20</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f6 f5-ns ml0 light-red">Monthly cost</dd>
                  <dd className="f3 f2-ns b ml0">$120~</dd>
                </dl>
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

export default About;
