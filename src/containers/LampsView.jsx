import React from 'react'
import {RaisedButton, IconButton} from 'material-ui'

import './LampsView.scss'
import socket from '../socket'

export default class LampsView extends React.Component {
  render() {
    const height = '4em'
    const buttons = []
    const lamps = []
    const lampActionFactory = lampNumber => () => {
      socket.emit('client/lampsAction', {target: lampNumber, action: 'toggle'})
    }
    const greyColor = 'grey'
    this.props.lamps.forEach((lamp, i) => {
      const lampLabel = `${lamp.isOn ? 'Desl' : 'L'}igar lâmpada ${lamp.number}`
      const lampAction = lampActionFactory(lamp.number)
      const buttonProps = {
        primary: lamp.isOn,
        backgroundColor: greyColor,
        onClick: lampAction,
        label: lampLabel,
        style: {height}
      }
      buttons.push(
        <RaisedButton key={i} className="lamps-view__buttons__button" {...buttonProps}/>
      )
      lamps.push(
        <IconButton key={i} iconClassName="material-icons" iconStyle={{color: greyColor, height}}>info</IconButton>
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
