import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <Sidebar />
        <TopBar />
        <div id="Projects-Page" className="mv0 fr w-80-l w-100 bg-white-ns bg-white">

          <div id="Projects-Banner" className="bg-black pa6-l pa5-m ph4 pv5 cf">
            <div className="w-100">
              <h1 className="mt0 mb4 fw4 f2-ns f3 white t-tracking lh-title">
                Curated Resources <br className="dn-ns dib" />for Humans
              </h1>
              <p className="mb0 lh-copy measure white-70">
                Quarry is a company that creates companies. We are a team of two that
                create simple, beautiful, and useful digital resources and experiences.
                We focus on making things that help others.
              </p>
            </div>
          </div>

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Projects;
