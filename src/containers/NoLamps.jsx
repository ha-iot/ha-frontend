import React from 'react'

import './NoLamps.scss'

export default class NoLamps extends React.Component {
  render() {
    return (
      <div className="no-lamps">
        <i className="no-lamps__icon material-icons">sentiment_dissatisfied</i>
        <span className="no-lamps__message">Não há lâmpadas conectadas.</span>
      </div>
    )
  }
}
