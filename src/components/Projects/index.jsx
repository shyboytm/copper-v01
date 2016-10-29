import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import Banner from '../Banner';
import Project from '../Project';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

class Projects extends Component {
  render() {

    const imgSogol        =  require('../../img/sogol-cover.jpg');
    const imgCalligritype =  require('../../img/calligritype-cover.jpg');

    return (
      <div id="Projects">
        <Sidebar />
        <TopBar />
        <div id="Projects-Page" className="mv0 fr w-80-l w-100 bg-white-ns bg-white">

          <Banner
            title="Our Projects"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-green" />

          <div id="Projects-Container" className="content-end flex flex-wrap ph6-l pv5-l pa5-m pa4">
            <Project
              projectImageSource={imgSogol}
              projectTitle="Sogol"
              projectDescription="Hand crafted and on-demand logos for your ideas"
              projectUrlColor="gold"
              projectUrl="sogol.co" />
            <Project
              projectImageSource={imgCalligritype}
              projectTitle="Calligritype"
              projectDescription="A Place for Artists &amp; Designers"
              projectUrlColor="red"
              projectUrl="calligritype.us" />
          </div>

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Projects;
