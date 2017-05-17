import React, {Component} from 'react';
import APIHelper from '../utils/APIHelper';
import autobind from 'autobind-decorator';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: {}
    };
  }

  componentDidMount() {
    const uid = this.props.match.params.uid;
    APIHelper.getTopic(uid).then(topic => this.setState({topic: topic}));
  }

  @autobind
  onUpVote() {
    const uid = this.props.match.params.uid;
    APIHelper.increateUpVoteTopic(uid).then(topic => this.setState({topic: topic}));
  }

  @autobind
  onDownVote() {
    const uid = this.props.match.params.uid;
    APIHelper.increateDownVoteTopic(uid).then(topic => this.setState({topic: topic}));
  }

  render() {
    return (
      <div>
        <h1>{this.state.topic.str}</h1>
        <div>uid : {this.state.topic.uid}</div>
        <div>
          <div>Up {this.state.topic.up}</div>
          <button onClick={this.onUpVote}>Up Vote</button>
        </div>
        <div>
          <div>Down {this.state.topic.down}</div>
          <button onClick={this.onDownVote}>Down Vote</button>
        </div>
      </div>
    );
  }
}

export default Topic;
