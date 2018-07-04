import React from 'react';

import './contact.scss';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <h2>Interested in contacting me regarding a project?</h2>
        <h3 className='email'><a href='mailto:vibecastor@gmail.com'>Email me!</a></h3>
      </div>
    );
  }
}
