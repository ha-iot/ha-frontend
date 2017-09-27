import React from 'react'
import {RaisedButton} from 'material-ui'
import {DeviceBrightnessHigh, DeviceBrightnessLow} from 'material-ui/svg-icons/index'

import './GeneralView.scss'
import socket from './socket'

export default class LampsView extends React.Component {
  render() {
    let lamps
    const hasLamps = !!this.props.lamps.length
    const height = '4em'

    if (hasLamps) {
      lamps = this.props.lamps.map((lamp, i) => {
        let [LampIcon, color] = lamp.isOn ? [DeviceBrightnessHigh, '#d8d800'/* yellow */] : [DeviceBrightnessLow, 'grey']
        return <LampIcon key={i} className="general-view__lamps__lamp" style={{color, height}}/>
      })
    } else {
      lamps = <span>Não há lâmpadas conectadas.</span>
    }

    const actionButtons = [
      {action: 'toggle', label: 'Alternar lâmpadas'},
      {action: 'on', label: 'Ligar lâmpadas'},
      {action: 'off', label: 'Desligar lâmpadas'},
    ]
    const actionFactory = action => () => {
      socket.emit('client/lampsAction', {target: 'all', action})
    }
    const buttons = actionButtons.map(({action, label}, i) =>
      <RaisedButton key={i} className="general-view__buttons__button" onClick={actionFactory(action)} label={label} primary={true} disabled={!hasLamps} style={{height}}/>
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
