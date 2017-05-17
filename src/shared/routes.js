import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home';
import CreateTopic from './components/create-topic';
import Topic from './components/topic';

export default () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/new-topic" component={CreateTopic}/>
    <Route path="/topics/:uid" component={Topic}/>
  </div>
);
