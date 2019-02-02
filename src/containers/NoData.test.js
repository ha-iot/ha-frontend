import React from 'react'
import ReactDOM from 'react-dom'

import NoData from './NoData'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NoData/>, div)
})
