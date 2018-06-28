import React from 'react';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
      <header>
        <aside>
          <h4>Mike Castor</h4>
          <h5>Full-stack Javascript Developer</h5>
        </aside>
      </header>
      </div>
    );
  }
}
