import React from 'react'
import {Link} from 'react-router-dom'
import {RaisedButton, IconButton} from 'material-ui'
import {muiThemeable} from "material-ui/styles/index"

import './LampsView.scss'
import socket from '../socket'

class LampsView extends React.Component {
  render() {
    const height = '4em'
    const buttons = []
    const lamps = []
    const lampActionFactory = lampNumber => () => {
      socket.emit('client/lampsAction', {target: lampNumber, action: 'toggle'})
    }
    const greyColor = 'grey'
    /**
     * @param {{isOn, label}} lamp
     */
    this.props.lamps.forEach((lamp, i) => {
      const buttonProps = {
        primary: lamp.isOn,
        backgroundColor: greyColor,
        onClick: lampActionFactory(lamp.number),
        label: `${lamp.isOn ? 'Desl' : 'L'}igar ${lamp.label}`,
        style: {height}
      }
      buttons.push(<RaisedButton key={i} className="lamps-view__buttons__button" {...buttonProps}/>)
      const iconStyle = {
        height,
        color: lamp.isOn ? this.props.muiTheme.palette.primary1Color : greyColor
      }
      lamps.push(
        <Link key={i} to={'/lamps/' + lamp.number}>
          <IconButton iconClassName="material-icons" iconStyle={iconStyle}>info</IconButton>
        </Link>
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

export default muiThemeable()(LampsView)
