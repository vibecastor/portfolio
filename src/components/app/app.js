import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Header from '../header/header';
import Home from '../home/home';
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

import './app.scss';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <BrowserRouter>
        <div className='router'>
          <ul className='nav'>
            <li><NavLink exact to="/">home</NavLink></li>
            {/*<li><NavLink to="/about">about</NavLink></li>*/}
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
          </ul>
          <Route exact path='/' component={About}/>
          {/*<Route exact path='/about' component={About}/>*/}
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
          </div>
        </BrowserRouter>
      <Footer/>
      </div>
    );
  }
}
