import React from 'react'
import {RaisedButton, IconButton} from 'material-ui'

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
      let [iconClass, color] = lamp.isOn ? ['brightness_high', '#d8d800'/* yellow */] : ['brightness_low', 'grey']
      lamps.push(
        <IconButton key={i} className="lamps-view__lamps__lamp" iconStyle={{color, height}} iconClassName="material-icons">
          {iconClass}
        </IconButton>
      )
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
