import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import todoApp from './reducers/index'
import App from './App'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

const logger = createLogger();
const store = createStore(
  todoApp
  // applyMiddleware(promise)
)

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
