import React, {Component} from 'react';
import axios from 'axios';
// import Moment from 'react-moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postData: [],
      postComponents: []
    }
  }

  componentDidMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => {
      this.setState({ posts: res.data.slice(0,10) });

      for (var i = 0; i < 10; i++) {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.posts[i]}.json?print=pretty`)
        .then(res => {
          this.setState({
            postData: this.state.postData.concat(res.data)
          })
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const posts = this.state.postData.map((post, index) => {
      console.log(index);
      return (
        <li key={index} className="item">
          <div className="title-line">
            <a href={post.url}>{post.title}</a> <span className="comm-url"> (somewhere.com) </span>
          </div>
          <div className="details-line">
            <span className="score">{post.score} points</span> by <span className="username"> {post.by} </span>
            <span className="age"></span> |
            <span className="comments"> {post.descendants} comments</span>
          </div>
        </li>
      )
    })

    return (
      <ul>{posts}</ul>
    );
  }
}

export default App;
