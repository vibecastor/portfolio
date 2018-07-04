import React from 'react';
import Profile from '../../assets/mike.jpg';
import './about.scss';

export default class About extends React.Component {
  render() {
    return (
      <div className='about'>
      <h1>Software Developer</h1>
        <p>I’m a Seattle based full-stack JavaScript developer with a passion for building elegant, bespoke, interactive applications.
          I have experience in all areas of the stack from building and designing responsive front-ends to building RESTful API's.  I'm at home on any project that requires a creative, organized developer with excellent communication skills.</p>
        <ul>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>jQuery</li>
          <li>Webpack</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Mobile & Responsive Design</li>
          <li>Wireframes</li>
          <li></li>
        </ul>
        <img src={Profile} alt="profile pic" height="20%" width="20%"></img>
      </div>
    );
  }
}
