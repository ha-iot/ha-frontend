import React from 'react'
import {Tabs, Tab} from 'material-ui'

import LampsView from './LampsView'
import GeneralView from './GeneralView'

export default class MenuTabs extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab label="Lâmpadas">
          <LampsView lamps={this.props.lamps}/>
        </Tab>
        <Tab label="Geral">
          <GeneralView lamps={this.props.lamps}/>
        </Tab>
      </Tabs>
    )
  }
}