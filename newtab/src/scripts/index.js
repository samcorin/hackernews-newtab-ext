import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import { connect, Provider } from 'react-redux';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';

import {nameReducer, dataReducer} from './reducers/index';
import {changeName, fetchData} from './actions/index';



// ---------------------------------------------------

// var URL2 = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=AAPL`;
// var tickerString = 'Welcome to the URL stock ticker. ';

// // Replaces spaces with whitespace characters to be displyed in the URL bar.
// function whiteChar(string) {
//   var newChar = String.fromCharCode(160);
//   return string.split(' ').join(newChar);
// }

// // ANIMATION
// function animateUrl(string) {
//   // loop, remove from front, add to end.
//   console.log("Animate")
//   var start = 0,
//     end = 40,
//     initial = { url: "test" },
//     href = { url: window.location.href },
//     wChar = String.fromCharCode(160);
//     console.log(href)
//   setInterval(function() {
//     console.log("interval")
//     var res = string.substring(start++, end++);

//     history.replaceState(initial, "page 2", `$$$${wChar}${res}`);
//   }, 1125);
// };


// var stockData = () => {
//   console.log("getting data.")
//   // var finalString = '';

//   fetch(URL2)
//   .then(function(res) { return res.json(); })
//   .then(data => {
//     console.log("Data: ", data);

//     // var name = data.Name;
//     // var price = data.LastPrice;
//     // var change = data.ChangePercent;
//     // var vol = data.Volume;

//     var tempString = `${tickerString} ${data.Name} close: ${data.LastPrice} +${data.ChangePercent}% vol: ${data.Volume} ... by Sam Corin`;
//     // console.log("tempString: ", tempString);

//     var formatted = whiteChar(tempString);
//     // console.log("formatted: ", formatted);

//     animateUrl(formatted);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }
// stockData();


// --------------------------------------------------------




var reducer = combineReducers({
  name: nameReducer,
  data: dataReducer
});

var store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  // console.log("Subscribe State: ", store.getState());
});

store.dispatch(changeName("Billy"));

store.dispatch(fetchData());
// setInterval(() => {
//   console.log("State now: ", store.getState());
// }, 1000);

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
