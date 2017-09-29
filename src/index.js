import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.scss'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <HashRouter>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </HashRouter>,
  document.getElementById('root')
)
registerServiceWorker()
