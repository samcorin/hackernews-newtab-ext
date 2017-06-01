import React from 'react';
import {render} from 'react-dom';
import App from './components/app/App';

import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import { connect, Provider } from 'react-redux';
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

store.dispatch(fetchData());

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));
