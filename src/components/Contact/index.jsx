import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import TopBar from '../TopBar';
import Banner from '../Banner';
import Footer from '../Footer';

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <Sidebar />
        <TopBar />
        <div id="Contact-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="Contact Us"
            descriptionStyles="white-70"
            description="We’re always open for sponsors, feedback, or just to say to hey!"
            backgroundColor="bg-purple" />

          <Footer />

        </div>
      </div>
    );
  }
}

export default Contact;
