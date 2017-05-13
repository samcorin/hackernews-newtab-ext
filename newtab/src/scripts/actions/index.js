import axios from 'axios';

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // ES6
  }
};

// export var startDataFetch = () => {
//   return {
//     type: 'START_FETCH_DATA'
//   }
// };

// export var completeDataFetch = (data) => {
//   return {
//     type: 'COMPLETE_FETCH_DATA',
//     data
//   }
// };

export var addDataFetch = (data) => {
  return {
    type: 'ADD_FETCH_DATA',
    data
  }
};


export var fetchData = (name) => {
  return (dispatch, getState) => {
    // dispatch(startDataFetch());
    // var array = [];

    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(res => {
        var done = res.data.slice(0,10);

        // console.log(done);
        // data passed should be an array of objects, nothing more.
        var state = getState();


        // console.log("State:", state);

        for (var i = 0; i < 10; i++) {
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${done[i]}.json?print=pretty`)
          .then(res => {
            // array.push(res.data);
            // console.log("RES.DATA", res.data)
            // console.log("STATE",state);
            dispatch(addDataFetch(res.data));
          })
          // dispatch(completeDataFetch(array));
        }

      })
      .catch(function (error) {
        console.log(error);
      });

  }
};
