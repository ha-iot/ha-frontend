import React from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider} from 'material-ui/styles'

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
    <MuiThemeProvider>
      <GeneralView lamps={lamps}/>
    </MuiThemeProvider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
