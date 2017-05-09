import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      // this.setState({
      //   count: this.state.count + 1
      // });
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

// Clicked {this.props.count}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
