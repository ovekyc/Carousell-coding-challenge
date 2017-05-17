import React, {Component} from 'react';
import APIHelper from '../utils/APIHelper';

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
        {
          this.state.top20.map((data)=>{
            return <div>{data.str}</div>
          })
        }
      </div>
    );
  }
}

export default Home;
