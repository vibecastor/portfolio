import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <footer>
          <ul className='social'>
            <li><a href='mailto:vibecastor@gmail.com'><i className="icon-gmail"></i></a></li>
            <li><a href='https://www.linkedin.com/in/mikecastor'><i className="icon-linkedin"></i></a></li>
            <li><a href='https://github.com/vibecastor'><i className="icon-github"></i></a></li>
          </ul>
          <h4><a href='mailto:vibecastor@gmail.com'>vibecastor@gmail.com</a></h4>
        </footer>
      </div>
    );
  }
}
