import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import About from './components/About';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';

import './index.css';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="projects" component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
