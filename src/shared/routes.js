import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home';
import CreateTopic from './components/create-topic';
import Topic from './components/topic';
import NotFound from './components/not-found';

export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/new-topic" component={CreateTopic}/>
    <Route path="/topics/:uid" component={Topic}/>
    <Route component={NotFound} status="404"/>
  </Switch>
);
