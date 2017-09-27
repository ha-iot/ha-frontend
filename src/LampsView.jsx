import React from 'react'
import {RaisedButton} from 'material-ui'
import {DeviceBrightnessHigh, DeviceBrightnessLow} from 'material-ui/svg-icons/index'

import './LampsView.scss'
import socket from './socket'

export default class LampsView extends React.Component {
  render() {
    const height = '4em'
    const buttons = []
    const lamps = []
    const lampActionFactory = lampNumber => () => {
      socket.emit('client/lampsAction', {target: lampNumber, action: 'toggle'})
    }
    this.props.lamps.forEach((lamp, i) => {
      const lampLabel = `${lamp.isOn ? 'Desl' : 'L'}igar lâmpada ${lamp.number}`
      const lampAction = lampActionFactory(lamp.number)
      buttons.push(
        <RaisedButton key={i} className="lamps-view__buttons__button" onClick={lampAction} label={lampLabel} primary={true} style={{height}}/>
      )
      let [LampIcon, color] = lamp.isOn ? [DeviceBrightnessHigh, '#d8d800'/* yellow */] : [DeviceBrightnessLow, 'grey']
      lamps.push(<LampIcon key={i} className="lamps-view__lamps__lamp" style={{color, height}}/>)
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
