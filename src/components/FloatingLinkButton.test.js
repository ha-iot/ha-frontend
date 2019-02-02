import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {MuiThemeProvider} from 'material-ui/styles'
import {NavigationArrowBack} from 'material-ui/svg-icons'

import FloatingLinkButton from './FloatingLinkButton'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider>
      <HashRouter>
        <FloatingLinkButton icon={NavigationArrowBack} to="/some/path/"/>
      </HashRouter>
    </MuiThemeProvider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
