import React, { Component } from 'react';
import { Link } from 'react-router';

class TopBar extends Component {
  render() {

    const logoImage = require('../../img/quarry-black-logo.png');

    return (
      <div id="TopBar">
        <div className="w-100 ph1 bg-white fl dn-l db">
          <Link to="/">
            <img className="dim w4 pv3 db center" src={logoImage} alt="Quarry" />
          </Link>
          <div className="bt b--black-10 pv3 nowrap overflow-x-auto">
            <ul className="pl3 pb3 list tc">
              <Link>
                <li className="link f5 dib mr4">Projects</li>
              </Link>
              <Link>
                <li className="link f5 dib mr4">About</li>
              </Link>
              <Link>
                <li className="link f5 dib mr4">Contact</li>
              </Link>
              <Link>
                <li className="link f5 dib mr4">Sponsor</li>
              </Link>
            </ul>
            <ul className="pl3 list mt2 tc">
              <Link>
                <li className="link f5 dib mr4 black-50">Newsletter</li>
              </Link>
              <Link>
                <li className="link f5 dib mr4 black-50">Wallpapers</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;