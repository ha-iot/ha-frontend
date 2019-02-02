import React from 'react'
import ReactDOM from 'react-dom'
import {MuiThemeProvider} from 'material-ui/styles'

import LampData from './LampData'
import {HashRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const lamps = [
    {isOn: true, number: 0, upTime: 16, label: 'Lamp 1'},
    {isOn: false, number: 1, upTime: 16, label: 'Lamp 2'},
    {isOn: false, number: 2, upTime: 16, label: 'Lamp 3'},
    {isOn: true, number: 3, upTime: 16, label: 'Lamp 4'},
  ]
  const match = {
    params: {
      lampNumber: '1',
    },
  }

  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <HashRouter>
        <LampData match={match} lamps={lamps}/>
      </HashRouter>
    </MuiThemeProvider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
