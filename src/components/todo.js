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
