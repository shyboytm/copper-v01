import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {

    const logoImage = require('../../img/quarry-black-logo.png');

    return (
      <div id="Sidebar">
        <div className="w-20-l h-100 ph2 pv4 fixed br b--black-10 fl dib-l dn">
          <Link to="/">
            <img className="dim w-60 pb3 db center" src={logoImage} alt="Quarry" />
          </Link>
          <ul className="list">
            <Link>
              <li className="forward pv3">Projects</li>
            </Link>
            <Link>
              <li className="forward pv3">About</li>
            </Link>
            <a href="mailto:contact@usequarry.com" className="link black">
              <li className="forward pv3">Contact</li>
            </a>
            <Link>
              <li className="forward pv3">Sponsor</li>
            </Link>
          </ul>
          <ul className="list mt2">
            <Link>
              <li className="forward pv3 black-50">Newsletter</li>
            </Link>
            <Link>
              <li className="forward pv3 black-50">Wallpapers</li>
            </Link>
          </ul>
          <div id="Sponsor" className="w-90 mb3 db pl3 center bottom-0 absolute">
            <span className="f6 i black-20">Sponsored by</span>
            <div className="bg-black-05 br2 mt2 pa4">
              <span className="tc">Squarespace</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
