import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'
import { combineReducers } from 'redux'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
          if (index === action.index) {
            return { ...todo,  completed: true }
          }
          return todo
        })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp