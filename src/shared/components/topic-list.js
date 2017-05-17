import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TopicList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const topics = this.props.topics.map(topic => <li>{topic.str}</li>);
    return (
      <ol>{topics}</ol>
    );
  }
}

export default TopicList;
