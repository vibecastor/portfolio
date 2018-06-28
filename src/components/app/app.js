import React from 'react';

import Header from '../header/header';
import Profile from '../../assets/mike.jpg';
import Projects from '../projects/projects';
import About from '../about/about';
import Contact from '../contact/contact';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
          <h1>Full-stack Javascript Developer</h1>
          <img src={Profile} alt="profile pic" height="25%" width="25%"></img>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}
