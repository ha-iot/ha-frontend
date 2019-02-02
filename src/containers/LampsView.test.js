import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {MuiThemeProvider} from 'material-ui/styles'

import LampsView from './LampsView'

it('renders without crashing', () => {
  const lamps = [
    {isOn: true, number: 0, label: 'Lamp 1'},
    {isOn: false, number: 1, label: 'Lamp 2'},
    {isOn: false, number: 2, label: 'Lamp 3'},
    {isOn: true, number: 3, label: 'Lamp 4'},
  ]

  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <HashRouter>
        <LampsView lamps={lamps}/>
      </HashRouter>
    </MuiThemeProvider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
