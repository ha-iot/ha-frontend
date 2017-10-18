import React from 'react'
import ReactDOM from 'react-dom'
import NoLamps from './NoLamps'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NoLamps/>, div)
})
