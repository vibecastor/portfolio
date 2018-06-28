import React from 'react';

import Profile from '../../assets/mike.jpg';


export default class Home extends React.Component {
  render() {
    return (
      <div>
      <h1>Full-stack Javascript Developer</h1>
      <img src={Profile} alt="profile pic" height="25%" width="25%"></img>
      </div>
    );
  }
}
