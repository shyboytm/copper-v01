import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import Banner from '../Banner';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

class About extends Component {
  render() {
    return (
      <div id="About">
        <Sidebar />
        <TopBar />
        <div id="About-Page" className="mv0 fr w-80-l w-100 bg-white-ns bg-white">

          <Banner
            title="About Us"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-blue" />

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default About;
