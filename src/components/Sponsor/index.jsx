import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import Banner from '../Banner';
import Footer from '../Footer';

class Sponsor extends Component {
  render() {
    return (
      <div id="Sponsor">
        <Sidebar />
        <TopBar />
        <div id="Sponsor-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="Sponsorships"
            descriptionStyles="white-70"
            description="The best and only way to promote your product, company, or service
                        directly to the users of Quarry's projects is with a week-long and
                        exclusive sponsorship."
            backgroundColor="bg-green" />

          <Footer />

        </div>
      </div>
    );
  }
}

export default Sponsor;
