import React from 'react'
import styled from 'styled-components'
import {MuiThemeProvider} from 'material-ui/styles'
import {ActionInfoOutline} from 'material-ui/svg-icons'
import {AppBar as MuiAppBar, Snackbar} from 'material-ui'
import {HashRouter, Redirect, Route} from 'react-router-dom'

import MenuTabs from './Tabs'
import LampData from './LampData'
import socket from '../socket'

const ActionInfoIcon = styled(ActionInfoOutline)`
  height: 48px !important;
  color: white !important;
`

function AppBar() {
  return (
    <MuiAppBar title="HAIoT"
               className="app-bar"
               showMenuIconButton={false}
               iconElementRight={<ActionInfoIcon/>}/>
  )
}

class App extends React.Component {
  state = {
    // On future definitions, "lamps" will be a simple list without the "raw" property. When I try to do
    // "lamps.raw", "undefined" will be returned and we'll know the value came from the server.
    lamps: Object.assign([], {raw: true}),
    snackbar: {
      open: false,
      message: '',
    },
  }

  constructor() {
    super()

    this.closeSnackbar = this.closeSnackbar.bind(this)
  }

  closeSnackbar() {
    this.setState({
      snackbar: {open: false, message: ''},
    })
  }

  componentWillMount() {
    socket.emit('general/specifyClient')
    socket.on('client/lampsState',
      /**
       * @param {{number, isOn, upTime}[]} data
       */
      (data) => {
        this.setState({lamps: data})
      },
    )
    socket.on('client/response', (data) => {
      this.showSnackbar(data.message)
    })
    socket.emit('client/getLampsState')
  }

  showSnackbar(message) {
    this.setState({
      snackbar: {open: true, message},
    })
  }

  render() {
    const {lamps, snackbar} = this.state
    return (
      <MuiThemeProvider>
        <HashRouter>
          <div>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/" render={AppBar}/>
            <Route path="/home" render={() => <MenuTabs lamps={lamps}/>}/>
            <Route path="/lamps/:lampNumber" render={({match}) => <LampData lamps={lamps} match={match}/>}/>
            <Snackbar autoHideDuration={4000} onRequestClose={this.closeSnackbar} {...snackbar}/>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
