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

          <div id="Our-Story" className="ph6-l pv5-l pa5-m pa4 bg-near-white">
            <div className="bg-white ph4 pv3">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Our Story</h2>
              <div className="db overflow-hidden">
                <p className="fl db w-50 lh-copy black-60 pr4-ns">
                  The following article covers a topic that has recently moved to center stage–at least it seems that way. If you’ve been thinking you need to know more about unconditional love, here’s your opportunity. When darkness turns to day, the sun moves over the horizon and touches everything in sight. This movement across the landscape brightens everything. Such an illumination awakens us all.
                </p>
                <p className="fl db w-50 lh-copy black-60 pl4-ns">
                  The following article covers a topic that has recently moved to center stage–at least it seems that way. If you’ve been thinking you need to know more about unconditional love, here’s your opportunity. When darkness turns to day, the sun moves over the horizon and touches everything in sight. This movement across the landscape brightens everything. Such an illumination awakens us all.
                </p>
              </div>
            </div>
          </div>

          <div id="Transparency">
            <div className="ph6-l pv5-l pa5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Transparency</h2>
              <p className="mb4 lh-copy black-60 measure">
                We believe in oversharing and being open with our work. Helping others learn
                from our successes and failures is one of the ways we give back.
              </p>
              <div className="cf">
                <dl className="db dib-l w-auto-l lh-title mr6-l mb4">
                  <dd className="f5 ml0 blue">Projects</dd>
                  <dd className="f2 b ml0">7</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l mb4">
                  <dd className="f5 ml0 light-purple">Hrs worked</dd>
                  <dd className="f2 b ml0">620~</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l mb4">
                  <dd className="f5 ml0 green">Hrs per week</dd>
                  <dd className="f2 b ml0">20</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l mb4">
                  <dd className="f5 ml0 light-red">Monthly cost</dd>
                  <dd className="f2 b ml0">$120~</dd>
                </dl>
                <dl className="db dib-l w-auto-l lh-title mr6-l mb4">
                  <dd className="f5 ml0 gold">Views per week</dd>
                  <dd className="f2 b ml0">900,000~</dd>
                </dl>
              </div>
            </div>
          </div>

          <div id="Timeline" className="w-100 bg-near-white">
            <div className="overflow-auto ph6-l pt5-ns ph5-m pa4">
              <h2 className="mb4 fw5 f3-ns f4 black lh-title">Timeline</h2>
              <p className="fl lh-copy black-60 measure">
                We are a team of two that create simple, beautiful digital experiences
                and resources with the intention of organizing and curating some of the
                world's most popular online topics.
              </p>
            </div>
            <div className="w-100 db">
              <div className="w-80 center">
                <span className="fl f6 black-30">Latest</span>
                <span className="fr f6 black-30">Scroll →</span>
              </div>
               <div className="w-100 nowrap overflow-x-scroll ph6-l pb5-l pa5-m pa4">
                 <div className="br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 blue">October 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Sogol</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Crag Supply</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 orange">September 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Sogol</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Crag Supply</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 green">August 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Sogol</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Crag Supply</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Designed Quarry's New Website</li>
                    </ul>
                 </div>
                 <div className="ml5-ns ml3 br2 q-shadow dib ph5-ns pa4 bg-white">
                    <h2 className="f5 bold center mw6 purple">July 2016</h2>
                    <ul className="list pl0 ml0 center mw6">
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Sogol</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Launched Crag Supply</li>
                      <li className="pv3 f3-ns f4 fw3-ns fw4 black-60">Designed Quarry's New Website</li>
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
