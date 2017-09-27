import React from 'react'
import {AppBar, Snackbar} from 'material-ui'
import {ActionInfoOutline} from 'material-ui/svg-icons/index'

import './App.scss'
import MenuTabs from './Tabs'
import socket from './socket'


function _closeSnackbar() {
  this.setState({snackbar: {open: false, message: ''}})
}

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      lamps: [],
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
       * @param {{number, isOn}[]} data
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
    return (
      <div>
        <AppBar title="HAIoT" className="app-bar" showMenuIconButton={false} iconElementRight={infoIcon}/>
        <MenuTabs lamps={this.state.lamps}/>
        <Snackbar autoHideDuration={4000} onRequestClose={this.closeSnackbar} {...this.state.snackbar}/>
      </div>
    )
  }
}
