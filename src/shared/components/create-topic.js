import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import autobind from 'autobind-decorator';
import APIHelper from '../utils/APIHelper';

class CreateTopic extends Component {
  constructor() {
    super();
    this.state = {
      topic: ''
    };
  }

  @autobind
  createTopic() {
    APIHelper.createTopic(this.state.topic)
      .then(topic => (document.location = `/topics/${topic.uid}`));
  }

  @autobind
  onTopicChange(event) {
    this.setState({topic: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>Create new topic</h1>
        <div>Topic</div>
        <input
          type='text'
          value={this.state.topic}
          onChange={this.onTopicChange} />
        <button
          onClick={this.createTopic}>
          Submit
        </button>
        <button><Link to="/">Cancel</Link></button>
      </div>
    );
  }
}

export default CreateTopic;
