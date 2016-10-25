import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {

    const logoImage = require('../../img/quarry-black-logo.png');

    return (
      <div id="Sidebar">
        <div className="w5-l h-100 ph2 pv4 fixed br b--black-10 fl dib-l dn">
          <img className="w-60 pb3 db center" src={logoImage} alt="Quarry" />
          <ul className="list">
            <Link>
              <li className="dim pv3">Projects</li>
            </Link>
            <Link>
              <li className="dim pv3">About</li>
            </Link>
            <Link>
              <li className="dim pv3">Contact</li>
            </Link>
            <Link>
              <li className="dim pv3">Sponsor</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
