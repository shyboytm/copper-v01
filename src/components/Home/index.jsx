import React, { Component } from 'react';

import Sidebar from '../Sidebar';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Sidebar />
        <div id="HomePage" className="mv0 fr w-80-l w-100">
          <div id="Banner" className="bg-black pv5 ph5">
            <div className="w-60-l w-80-m w-90">
              <h1 className="mt0 fw5 white">Curated Resources for Humans</h1>
              <p className="mb0 lh-copy white-80">
                We are a team of two that create simple, beautiful digital experiences
                and resources with the intention of organizing and curating some of the
                world's most popular online topics.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
