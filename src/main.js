import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app';

import './styles/main.scss';

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
ReactDom.render(<App/>, appContainer);
