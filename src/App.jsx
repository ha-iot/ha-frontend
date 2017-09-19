import React from 'react'
import {AppBar} from 'material-ui'
import {ActionInfoOutline} from 'material-ui/svg-icons/index'

import './App.scss'
import MenuTabs from './Tabs'
import socket from './socket'

class App extends React.Component {
  state = {
    lamps: []
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
    socket.emit('client/getLampsState')
  }

  render() {
    const infoIcon = <ActionInfoOutline className="app-bar__info-icon"/>
    return (
      <div>
        <AppBar title="HAIoT" className="app-bar" showMenuIconButton={false} iconElementRight={infoIcon}/>
        <MenuTabs lamps={this.state.lamps}/>
      </div>
    )
  }
}

export default App
