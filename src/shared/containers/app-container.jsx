import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from '../components/home.jsx';

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
