import React from 'react'
import {RaisedButton} from 'material-ui'
import {DeviceBrightnessHigh, DeviceBrightnessLow} from 'material-ui/svg-icons/index'

import './LampsView.scss'
import socket from './socket'

export default class LampsView extends React.Component {
  render() {
    const buttons = []
    const lamps = []
    const lampActionFactory = lampNumber => () => {
      socket.emit('arduinoAction', {target: lampNumber, action: 'toggle'})
    }
    this.props.lamps.forEach((lamp, i) => {
      const lampLabel = 'Lâmpada ' + lamp.number
      const lampAction = lampActionFactory(lamp.number)
      buttons.push(
        <RaisedButton key={i} className="lamps-view__buttons__button" onClick={lampAction} label={lampLabel} primary={true}/>
      )
      let [LampIcon, color] = lamp.isOn ? [DeviceBrightnessHigh, 'yellow'] : [DeviceBrightnessLow, 'grey']
      lamps.push(<LampIcon key={i} className="lamps-view__lamps__lamp" style={{color}}/>)
    })

    return (
      <div className="lamps-view">
        <div className="lamps-view__buttons">
          {buttons}
        </div>
        <div className="lamps-view__lamps">
          {lamps}
        </div>
      </div>
    )
  }
}