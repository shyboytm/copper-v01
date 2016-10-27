import React, { Component } from 'react';

class Contact extends Component {
  render() {

    return (
      <div id="Contact" className="w-100 pv5 ph4 center tc bg-near-white">
        <h2 className="fw5 f3-ns f4 black lh-title">Contact Us</h2>
        <p className="mb4 lh-copy black-60">We’re always open for sponsors, feedback, or just to say to hey!</p>
        <a className="f6 link dim br2 ph4 pv3 mb2 dib white bg-black" href="mailto:contact@usequarry.com">Email Us</a>
      </div>
    );
  }
}

export default Contact;
