import React from 'react'
import ReactDOM from 'react-dom'

import GeneralView from './GeneralView'

it('renders without crashing', () => {
  const lamps = [
    {isOn: true},
    {isOn: false},
    {isOn: false},
    {isOn: true},
  ]
  const div = document.createElement('div')
  ReactDOM.render(
    <GeneralView lamps={lamps}/>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
