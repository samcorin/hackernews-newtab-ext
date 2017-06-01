import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class App extends Component {
  render() {
    if (this.props.data) {
      var stories = this.props.data.map((item, index) => {
        return (
          <li key={index} className="item">
            <div className="title-line">
              <a href={item.data.url} target="_blank">{item.data.title}</a> <span className="comm-url"> (somewhere.com) </span>
            </div>
            <div className="details-line">
              <span className="score">{item.data.score} points</span> by <span className="username"> {item.data.by} </span>
              <span className="age">{moment.unix(item.data.time).fromNow()}</span> |
              <a href={`https://news.ycombinator.com/item?id=${item.data.id}`}> <span className="comments"> {item.data.descendants} comments</span></a>
            </div>
          </li>
        )
      });

      return (
        <div className="flexbox">
          <ul className="el">{stories}</ul>
        </div>
      );

    } else {

      return (
        <div>There was an error...</div>
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

export default connect(mapStateToProps)(App);
