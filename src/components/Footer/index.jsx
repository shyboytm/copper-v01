import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {

    const logoImage = require('../../img/quarry-white-logomark.png');

    return (
      <div id="Footer" className="w-100 pv5 ph4 bg-black">
        <div className="cf center w-80">
          <div className="mt2 fr-ns fl w-100">
            <a href="mailto:contact@usequarry.com" className="usual dim link fw4 f4 white">contact@usequarry.com</a>
            <p className="f6 fw5 ttu white-50 t-tracking">© 2016 Quarry</p>
            <div className="mt3">
              <Link to="/" title="Home"
                className="link f5 dib-ns db pr2-ns mt0-ns mt2 white-30 hover-light-silver">
                Newsletter
              </Link>
              <a href="http://facebook.com/usequarry" title="Facebook"
                className="link f5 dib-ns db ph2-ns mt0-ns mt2 white-30 hover-light-silver">
                Facebook
              </a>
              <a href="http://twitter.com/usequarry" title="Twitter"
                className="link f5 dib-ns db ph2-ns mt0-ns mt2 white-30 hover-light-silver">
                Twitter
              </a>
              <a href="http://github.com/usequarry" title="Github"
                className="link f5 dib-ns db ph2-ns mt0-ns mt2 white-30 hover-light-silver">
                Github
              </a>
            </div>
            <a href="http://github.com/usequarry" title="Support Us on Amazon"
              className="link f6-ns f5 lh-copy db mt4 white-50 hover-white">
              Shop on Amazon to support us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
