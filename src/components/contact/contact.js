import React from 'react';
import Profile from '../../assets/mike.jpg';
import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <h2>Contacting me regarding interesting projects!</h2>
        <img src={Profile} alt="profile pic" height="30%" width="30%"></img>
        <h3 className='email'><a href='mailto:vibecastor@gmail.com'>Email me!</a></h3>
      </div>
    );
  }
}
