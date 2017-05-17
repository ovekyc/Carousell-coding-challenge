import React, {Component} from 'react';

class TopicList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const topics = this.props.topics.map(topic => <li key={topic.uid}>{topic.str}</li>);
    return (
      <ol>{topics}</ol>
    );
  }
}

export default TopicList;
