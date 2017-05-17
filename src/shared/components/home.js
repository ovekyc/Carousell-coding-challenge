import React, {Component} from 'react';
import APIHelper from '../utils/APIHelper';
import TopicList from '../components/topic-list';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      top20: []
    };
  }

  componentDidMount() {
    APIHelper.getTop20()
      .then(top20 => this.setState({top20: top20}));
  }

  render() {
    return (
      <div>
        <TopicList topics={this.state.top20}/>
      </div>
    );
  }
}

export default Home;
