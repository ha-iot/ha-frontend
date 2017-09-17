import React from 'react'
import {RaisedButton} from 'material-ui'
import {DeviceBrightnessHigh, DeviceBrightnessLow} from 'material-ui/svg-icons/index'

import './LampsView.scss'

export default class LampsView extends React.Component {
  state = {
    lamp1: false,
    lamp2: false,
    lamp3: false,
    lamp4: false
  }

  render() {
    const lamps = []
    for (let i = 1; i < 5; i++) {
      let [LampIcon, color] = this.state['lamp' + i] ? [DeviceBrightnessHigh, 'yellow'] : [DeviceBrightnessLow, 'grey']
      lamps.push(<LampIcon className="lamps-view__lamps__lamp" style={{color}}/>)
    }

    return (
      <div className="lamps-view">
        <div className="lamps-view__buttons">
          <RaisedButton className="lamps-view__buttons__button" label="Lâmpada 1" primary={true}/>
          <RaisedButton className="lamps-view__buttons__button" label="Lâmpada 2" primary={true}/>
          <RaisedButton className="lamps-view__buttons__button" label="Lâmpada 3" primary={true}/>
          <RaisedButton className="lamps-view__buttons__button" label="Lâmpada 4" primary={true}/>
        </div>
        <div className="lamps-view__lamps">
          {lamps}
        </div>
      </div>
    )
  }
}