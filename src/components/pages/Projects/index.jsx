import React, { Component } from 'react';

import Sidebar from '../../assets/Sidebar';
import TopBar from '../../assets/TopBar';
import Banner from '../../assets/Banner';
import Project from '../../assets/Project';
import ContactUs from '../../assets/ContactUs';
import Footer from '../../assets/Footer';

class Projects extends Component {
  render() {

    const imgSogol        =  require('../../../img/sogol-cover.jpg');
    const imgCrag         =  require('../../../img/crag-supply-cover.jpg');
    const imgCalligritype =  require('../../../img/calligritype-cover.jpg');
    const imgShopDrones   =  require('../../../img/shop-drones-cover.jpg');
    const imgFieldy       =  require('../../../img/fieldy-cover.jpg');
    const imgPrisma       =  require('../../../img/prisma-cover.jpg');
    const imgIllustree    =  require('../../../img/illustree-cover.jpg');

    return (
      <div id="Projects">
        <Sidebar />
        <TopBar />
        <div id="Projects-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="black"
            title="Our Projects"
            descriptionStyles="black-60"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-black-10" />

          <div id="Projects-Container" className="content-end flex flex-wrap ph6-l pv5-l pa5-m pa4">
            <Project
              projectImageSource={imgSogol}
              projectTitle="Sogol"
              projectDescription="Hand crafted and on-demand logos for your ideas"
              projectAuthor="Dennis Cortés"
              projectUrlColor="sogol-color"
              projectDisplayUrl="sogol.co"
              projectUrl="http://sogol.co" />
            <Project
              projectImageSource={imgCrag}
              projectTitle="Crag Supply"
              projectDescription="The best climbing gear from amazon, curated, for the vertically inclined"
              projectAuthor="Drew Miller"
              projectUrlColor="orange"
              projectDisplayUrl="cragsupply.com"
              projectUrl="http://www.cragsupply.com" />
            <Project
              projectImageSource={imgCalligritype}
              projectTitle="Calligritype"
              projectDescription="A place for artists &amp; designers"
              projectAuthor="Dennis Cortés"
              projectUrlColor="black"
              projectDisplayUrl="calligritype.us"
              projectUrl="http://calligritype.us" />
            <Project
              projectImageSource={imgShopDrones}
              projectTitle="Shop Drones Co."
              projectDescription="Drone shopping made beautifully simple"
              projectAuthor="Quarry"
              projectUrlColor="red"
              projectDisplayUrl="shopdrones.co"
              projectUrl="http://shopdrones.co" />
            <Project
              projectImageSource={imgFieldy}
              projectTitle="Fieldy"
              projectDescription="Unofficial resources for lovers of Field Notes"
              projectAuthor="Dennis Cortés"
              projectUrlColor="fieldy-color"
              projectDisplayUrl="fieldy.co"
              projectUrl="http://fieldy.co" />
            <Project
              projectImageSource={imgPrisma}
              projectTitle="Prisma"
              projectDescription="A beautiful and minimal dark UI and syntax theme for the text editor Atom."
              projectAuthor="Dennis Cortés"
              projectUrlColor="gold"
              projectDisplayUrl="atom.io"
              projectUrl="http://atom.io/fromcortes" />
            <Project
              projectImageSource={imgIllustree}
              projectTitle="Illustree"
              projectDescription="A resource and showcase for illustration inspiration"
              projectAuthor="Dennis Cortés"
              projectUrlColor="green"
              projectDisplayUrl="@illustree"
              projectUrl="http://instagram.com/illustree" />
          </div>

          <ContactUs />
          <Footer />

        </div>
      </div>
    );
  }
}

export default Projects;
