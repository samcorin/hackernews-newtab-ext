import axios from 'axios';

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
export var addDataFetch = (data) => {
  return {
    type: 'ADD_FETCH_DATA',
    data
  }
};

export var fetchData = (name) => {
  return (dispatch, getState) => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        var done = res.data.slice(0,10);
        var state = getState();

        for (var i = 0; i < 10; i++) {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${done[i]}.json?print=pretty`)
          .then(res => {
            dispatch(addDataFetch(res.data));
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });

  }
};
