import React from 'react'
import {AppBar, Snackbar} from 'material-ui'
import {ActionInfoOutline} from 'material-ui/svg-icons/index'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './App.scss'
import MenuTabs from './Tabs'
import LampData from './LampData'
import socket from '../socket'


function _closeSnackbar() {
  this.setState({snackbar: {open: false, message: ''}})
}

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      // On future definitions, "lamps" will be a simple list without the "raw" property. When I try to do
      // "lamps.raw", "undefined" will be returned and we'll know the value came from the server.
      lamps: Object.assign([], {raw: true}),
      snackbar: {
        open: false,
        message: ''
      }
    }

    this.closeSnackbar = _closeSnackbar.bind(this)
  }

  componentWillMount() {
    socket.emit('general/specifyClient')
    socket.on('client/lampsState',
      /**
       * @param {{number, isOn, upTime}[]} data
       */
      (data) => {
        this.setState({lamps: data})
      }
    )
    socket.on('client/response',
      /**
       * @param {{message: string}} data
       */
      (data) => {
        this.showSnackbar(data.message)
      }
    )
    socket.emit('client/getLampsState')
  }

  showSnackbar(message) {
    this.setState({snackbar: {open: true, message}})
  }

  render() {
    const infoIcon = <ActionInfoOutline className="app-bar__info-icon"/>
    const _getAppBar = () => <AppBar title="HAIoT" className="app-bar" showMenuIconButton={false} iconElementRight={infoIcon}/>
    return (
      <MuiThemeProvider>
        <HashRouter>
	  <div>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/" render={_getAppBar}/>
            <Route path="/home" render={() => <MenuTabs lamps={this.state.lamps}/>}/>
            <Route path="/lamps/:lampNumber" render={({match}) => <LampData lamps={this.state.lamps} match={match}/>}/>
            <Snackbar autoHideDuration={4000} onRequestClose={this.closeSnackbar} {...this.state.snackbar}/>
	  </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}
