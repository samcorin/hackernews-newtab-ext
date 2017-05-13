import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import { connect, Provider } from 'react-redux';
// import promise from 'redux-promise';
import thunk from 'redux-thunk';

import {nameReducer, dataReducer} from './reducers/index';
import {changeName, fetchData} from './actions/index';

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
