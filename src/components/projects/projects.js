import React from 'react';

import Phrasecraze from '../../assets/phrasecraze-image.png';
import PlentyOfDogs from '../../assets/plenty-of-dogs-image.png';
import EventUs from '../../assets/eventus-image.png';

import './projects.scss';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
      <h1>Projects</h1>
        <div className='project-container'>
          <ul>
            <li className='card'>
              <h1>EventUs</h1>
              <a href='http://eventus.site'>
                <img src={EventUs} alt='eventus.site' height='80%' width='80%'></img>
              </a>
              <p>EventUs is a social event creation and discovery application.
                A user can sign up, create a profile, create an event and view a list of events in an event feed on the main page view.
                This application was built for a social running club called Hash House Harriers.  The application is built using the MERN Stack (MongoDB, Express, React/Redux and Node).</p>
            </li>
            <li className='card'>
              <h1>Phrasecraze</h1>
              <a href='https://github.com/spinaltaper/phrasecraze'>
              <img src={Phrasecraze} alt='phrasecraze.website' height='80%' width='80%'></img>
              </a>
              <p>PhaseCraze is a word game REST API that consists of both a TCP server and HTTP server.  The TCP server is hosted on a Digital Ocean Droplet and the HTTP server is hosted on Heroku.  This project only runs on the command line.  Phrasecraze was built with Node.js, Express and MongoDB.</p>
            </li>
            <li className='card'>
              <h1>Plenty of Dogs</h1>
              <a href='http://plenty-of-dogs.site'>
                <img src={PlentyOfDogs} alt='plenty-of-dogs.site' height='80%' width='80%'></img>
              </a>
              <p>Plenty of Dogs is a client side application where a user can take a quiz to discover their preferred dog for adoption.  The quiz utilizes data from an API request to dog.ceo which is a public API of dog images.  The application then takes the results of the users quiz and makes a call to the Petfinder API which contains data on dogs that are currently available for adoption.  Plenty of Dogs was built with vanilla ES5 javascript, jQuery, Express and PostgreSQL.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
