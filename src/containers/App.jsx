import React from 'react'
import {Snackbar} from '@material-ui/core'
import {HashRouter, Redirect, Route} from 'react-router-dom'

import MenuTabs from './Tabs'
import socket from '../socket'
import LampData from './LampData'
import AppBar from '../components/AppBar'

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

  constructor(props) {
    super(props)

    this.closeSnackbar = this.closeSnackbar.bind(this)
  }

  closeSnackbar() {
    this.setState({
      snackbar: {open: false, message: ''},
    })
  }

  componentWillMount() {
    socket.onLampsStateUpdate(
      /**
       * @param {{number, isOn, upTime}[]} data
       */
      (data) => {
        this.setState({lamps: data})
      },
    )
    socket.onGeneralResponse(data => {
      this.showSnackbar(data.message)
    })
    socket.askForLampsState()
  }

  showSnackbar(message) {
    this.setState({
      snackbar: {open: true, message},
    })
  }

  render() {
    const {lamps, snackbar} = this.state
    return (
      <div>
        <HashRouter>
          <div>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/" render={AppBar}/>
            <Route path="/home" render={() => <MenuTabs lamps={lamps}/>}/>
            <Route path="/lamps/:lampNumber" render={({match}) => <LampData lamps={lamps} match={match}/>}/>
          </div>
        </HashRouter>
        <Snackbar autoHideDuration={4000} onRequestClose={this.closeSnackbar} {...snackbar}/>
      </div>
    )
  }
}

export default App
