import React, {Component} from 'react';
import {connect} from 'react-redux';
// import axios from 'axios';
// import Moment from 'react-moment';
// import store from './../../index';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: this.props.data
  //   };
  // }

    // store.subscribe(() => {
    //   // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
    //   this.setState({
    //     // data: store.getState().data;
    //     data: this.props.data
    //   });
    // });
  // }

  // componentDidMount() {
  //   console.log("props data: ", this.props.data)
  //   // state.dispatch(fetchData());
  // }

  render() {
    // console.log("Props:", this.props.data);
    // console.log("state data: ", this.props)
    // fix this
    if (this.props.data) {

      // need to only put in the datsa into array, not surrounding obj
      // console.log("OK")
      // console.log(this.props.data)
      // console.log(this.props.data[1])
      // this.props.data.forEach((item) => {
      //   console.log("item: ",item)
      // })
      // console.log("mapping...")
      // this.props.data.map((item, index) => {
      //   console.log(item.data);
      // });

      // console.log("Props.data: ", this.props.data)
      // return (
        var stories = this.props.data.map((item, index) => {
          // console.log("index");
          // console.log(this.props.data)
          // console.log(item)

          return (
            <li key={index} className="item">
              <div className="title-line">
                <a href={item.url}>{item.data.title}</a> <span className="comm-url"> (somewhere.com) </span>
              </div>
              <div className="details-line">
                <span className="score">{item.data.score} points</span> by <span className="username"> {item.data.by} </span>
                <span className="age"></span> |
                <span className="comments"> {item.descendants} comments</span>
              </div>
            </li>
          )
        });

        return (
          <ul>{stories}</ul>
        );
      // )
    } else {
      return (
        <div>
          <h1>popup</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    data: state.data
  };
};

// export default App;
export default connect(mapStateToProps)(App);


