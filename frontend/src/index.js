import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceworker from './serviceworker'

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { getUsers } from './actions/users.actions';
import { getAlcohols } from './actions/alcohols.action';
import { getDrinks } from './actions/drinks.actions';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

store.dispatch(getUsers())
store.dispatch(getAlcohols())
store.dispatch(getDrinks())
store.dispatch(getDrinks())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceworker.register()
reportWebVitals();
