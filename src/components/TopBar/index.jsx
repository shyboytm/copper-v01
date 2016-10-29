import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from '../Logo';

class TopBar extends Component {
  render() {
    return (
      <div id="TopBar">
        <div className="w-100 ph1 bg-white fl dn-l db">
          <Link to="/" className="dim w4 pv3 db center">
            <Logo />
          </Link>
          <div className="bt b--black-10 pv3 nowrap overflow-x-auto">
            <ul className="pl3 pb3 list tc">
              <Link to="/projects" className="link black">
                <li className="f5 dib mr4">Projects</li>
              </Link>
              <Link to="/about" className="link black">
                <li className="f5 dib mr4">About</li>
              </Link>
              <Link to="/contact" className="link black">
                <li className="f5 dib mr4">Contact</li>
              </Link>
              <Link>
                <li className="f5 dib mr4">Sponsor</li>
              </Link>
            </ul>
            <ul className="pl3 list mt2 tc">
              <Link>
                <li className="f5 dib mr4 black-50">Newsletter</li>
              </Link>
              <Link>
                <li className="f5 dib mr4 black-50">Wallpapers</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
