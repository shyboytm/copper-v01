import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import About from './components/pages/About';
import App from './App';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Newsletter from './components/pages/Newsletter';
import Projects from './components/pages/Projects';
import Sponsor from './components/pages/Sponsor';

import './index.css';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
      <Route path="contact" component={Contact} />
      <Route path="sponsor" component={Sponsor} />
      <Route path="newsletter" component={Newsletter} />
    </Route>
  </Router>,
  document.getElementById('root')
);
