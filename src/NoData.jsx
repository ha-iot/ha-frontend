import React from 'react'

import './NoData.scss'

export default class NoLamps extends React.Component {
  render() {
    return (
      <div className="no-data">
        <i className="no-data__icon material-icons">refresh</i>
        <span className="no-data__message">Aguardando dados...</span>
      </div>
    )
  }
}
