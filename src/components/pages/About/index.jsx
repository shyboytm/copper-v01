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

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default About;
