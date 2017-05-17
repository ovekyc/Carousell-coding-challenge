import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from '../components/home';
import CreateTopic from '../components/create-topic';

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

          <Route exact path="/" component={Home}/>
          <Route exact path="/new-topic" component={CreateTopic}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
