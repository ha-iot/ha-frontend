import React, {Component} from 'react'
import {AppBar} from 'material-ui'
import {ActionInfoOutline} from 'material-ui/svg-icons/index'

import './App.scss'
import MenuTabs from './Tabs'

class App extends Component {
  render() {
    const infoIcon = <ActionInfoOutline className="app-bar__info-icon"/>
    return (
      <div>
        <AppBar title="HAIoT" className="app-bar" showMenuIconButton={false} iconElementRight={infoIcon}/>
        <MenuTabs/>
      </div>
    )
  }
}

export default App
