import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import 'typeface-roboto';

import './index.css';
import App from './App';
import { loadState, saveState } from './storage/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunkMiddleware));

// @todo do not persist everything.
store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
