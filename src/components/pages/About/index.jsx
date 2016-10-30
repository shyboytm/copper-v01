import React, { Component } from 'react';

import Sidebar from '../../assets/Sidebar';
import TopBar from '../../assets/TopBar';
import Banner from '../../assets/Banner';
import Footer from '../../assets/Footer';

class About extends Component {
  render() {
    return (
      <div id="About">
        <Sidebar />
        <TopBar />
        <div id="About-Page" className="mv0 fr w-85-l w-100 bg-white-ns bg-white">

          <Banner
            titleStyles="white"
            title="About Us"
            descriptionStyles="white-70"
            description="Quarry is a company that creates companies. We are a team of
              two that create simple, beautiful, and useful digital resources and experiences.
              We focus on making things that help others."
            backgroundColor="bg-blue" />

          <div id="Transparency">
            <div className="ph6-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Transparency</h2>
              <div className="cf">
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f5 ml0 blue">Projects</dd>
                  <dd className="f2 b ml0">7</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f5 ml0 light-purple">Hrs worked</dd>
                  <dd className="f2 b ml0">620~</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f5 ml0 green">Hrs per week</dd>
                  <dd className="f2 b ml0">20</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l">
                  <dd className="f5 ml0 light-red">Monthly cost</dd>
                  <dd className="f2 b ml0">$120~</dd>
                </dl>
              </div>
            </div>
          </div>

          <div id="Timeline" className="w-100 bg-near-white">
            <div className="overflow-auto ph6-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Timeline</h2>
              <p className="fl lh-copy black-60 measure">
                We are a team of two that create simple, beautiful digital experiences
                and resources with the intention of organizing and curating some of the
                world's most popular online topics.
              </p>
            </div>
            <div className="w-100 db">
               <div className="w-100 nowrap overflow-x-auto ph6-l pb5-l pa5-m pa4">
                 <div className="br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 blue">October 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Sogol</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Crag Supply</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 orange">September 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Sogol</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Crag Supply</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 green">August 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Sogol</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Crag Supply</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 purple">July 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Sogol</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Launched Crag Supply</li>
                      <li className="f3-ns f4 fw3 pv3 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
               </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

export default About;
