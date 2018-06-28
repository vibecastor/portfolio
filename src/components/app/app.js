import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
          <Route path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
