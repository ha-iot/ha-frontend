import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.scss'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
