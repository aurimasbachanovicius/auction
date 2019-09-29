import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter/AppRouter';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
