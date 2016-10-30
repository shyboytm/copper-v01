import React, { Component } from 'react';

import Sidebar from '../../assets/Sidebar';
import TopBar from '../../assets/TopBar';
import Banner from '../../assets/Banner';
import Footer from '../../assets/Footer';

class Newsletter extends Component {
  render() {
    return (
      <div id="Newsletter">
        <Sidebar />
        <TopBar />
        <div id="Newsletter-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="Newsletter"
            descriptionStyles="white-70"
            description="The best and only way to promote your product, company, or service
                        directly to the users of Quarry's projects is with a week-long and
                        exclusive sponsorship."
            backgroundColor="bg-red" />

          <Footer />

        </div>
      </div>
    );
  }
}

export default Newsletter;
