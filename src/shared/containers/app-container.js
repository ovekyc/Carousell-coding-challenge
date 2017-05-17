import React, {Component} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Routes from '../routes';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new-topic">New Topic</Link></li>
          </ul>

          <hr/>

          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
