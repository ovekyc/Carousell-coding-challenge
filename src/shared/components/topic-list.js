import React, {Component} from 'react';

class TopicList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const topics = this.props.topics.map(topic => (
      <li key={topic.uid}>
        <a href={`/topics/${topic.uid}`}>{topic.str}</a>
      </li>
    ));
    return (
      <ol>{topics}</ol>
    );
  }
}

export default TopicList;
