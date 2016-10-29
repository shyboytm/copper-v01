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
    const imgShopDrones   =  require('../../img/shop-drones-cover.jpg');
    const imgFieldy       =  require('../../img/fieldy-cover.jpg');

    return (
      <div id="Projects">
        <Sidebar />
        <TopBar />
        <div id="Projects-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

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
              projectUrlColor="light-pink"
              projectUrl="sogol.co" />
            <Project
              projectImageSource={imgCalligritype}
              projectTitle="Calligritype"
              projectDescription="A place for artists &amp; designers"
              projectUrlColor="black"
              projectUrl="calligritype.us" />
            <Project
              projectImageSource={imgShopDrones}
              projectTitle="Shop Drones Co."
              projectDescription="Drone shopping made beautifully simple"
              projectUrlColor="red"
              projectUrl="shopdrones.co" />
            <Project
              projectImageSource={imgFieldy}
              projectTitle="Fieldy"
              projectDescription="Unofficial resources for lovers of Field Notes"
              projectUrlColor="gold"
              projectUrl="fieldy.co" />
          </div>

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Projects;
