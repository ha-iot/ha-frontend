import React from 'react'
import {RaisedButton, IconButton} from 'material-ui'

import './GeneralView.scss'
import socket from './socket'

export default class LampsView extends React.Component {
  render() {
    let lamps
    const height = '4em'

    lamps = this.props.lamps.map((lamp, i) => {
      let [iconClass, color] = lamp.isOn ? ['brightness_high', '#d8d800'/* yellow */] : ['brightness_low', 'grey']
      return (
        <IconButton key={i} className="general-view__lamps__lamp" iconClassName='material-icons' iconStyle={{color, height}}>
          {iconClass}
        </IconButton>
      )
    })

    const actionButtons = [
      {action: 'toggle', label: 'Alternar lâmpadas'},
      {action: 'on', label: 'Ligar lâmpadas'},
      {action: 'off', label: 'Desligar lâmpadas'},
    ]
    const actionFactory = action => () => {
      socket.emit('client/lampsAction', {target: 'all', action})
    }
    const buttons = actionButtons.map(({action, label}, i) =>
      <RaisedButton key={i} className="general-view__buttons__button" onClick={actionFactory(action)} label={label} primary={true} style={{height}}/>
    )

    return (
      <div className="general-view">
        <div className="general-view__lamps">
          {lamps}
        </div>
        <div className="general-view__buttons">
          {buttons}
        </div>
      </div>
    )
  }
}
