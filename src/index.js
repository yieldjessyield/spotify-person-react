import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router'
import Routes from './Routes'

ReactDOM.render(
  	<Router history={browserHistory} routes={Routes} />,
  	document.getElementById('root')
); 
