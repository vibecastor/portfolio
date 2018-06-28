import React from 'react';

import Profile from '../../assets/mike.jpg';
import './home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
      <h1>Full-stack Javascript Developer</h1>
      <img src={Profile} alt="profile pic" height="30%" width="30%"></img>
      </div>
    );
  }
}
