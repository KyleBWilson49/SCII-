import React, { PropTypes } from 'react'

const Todo = ({ onClick, comopleted, text }) => (
  <li
    onClick=(onClick)
    style=({
      textDecotation: completed ? 'line-throught' : 'none'
    })
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo 
