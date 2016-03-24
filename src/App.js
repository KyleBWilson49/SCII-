import React, { Component } from 'react'
import { createStore } from 'redux'
import todoApp from './reducers/reducer'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions'


let store = createStore(todoApp)

export default class App extends Component {
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}
