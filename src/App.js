import React, {Component} from 'react'
import {AppBar} from 'material-ui'
import {ActionInfoOutline} from 'material-ui/svg-icons/index'

import './App.scss'

class App extends Component {
  render() {
    const infoIcon = <ActionInfoOutline className="app-bar__info-icon"/>
    return (
      <AppBar title="HAIoT" className="app-bar" showMenuIconButton={false} iconElementRight={infoIcon}/>
    )
  }
}

export default App
