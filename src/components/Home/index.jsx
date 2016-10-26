import React, { Component } from 'react';

import Sidebar from '../Sidebar';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <Sidebar />
        <div id="HomePage" className="mv0 fr w-80-l w-100">
          <div id="Banner" className="bg-black ph6-l pv6-l pa5-m pa4">
            <div className="w-100">
              <h1 className="mt0 fw4 f2-ns f4 white t-tracking lh-title">
                Curated Resources for Humans
              </h1>
              <p className="mb0 lh-copy measure white-70">
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
