import React from 'react'
import {Tabs, Tab} from 'material-ui'
import SwipeableViews from 'react-swipeable-views'

import LampsView from './LampsView'
import GeneralView from './GeneralView'

export default class MenuTabs extends React.Component {
  state = {
    slideIndex: 0
  }

  handleChange = (value) => {
    this.setState({slideIndex: value})
  }

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Lâmpadas" value={0}/>
          <Tab label="Geral" value={1}/>
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <LampsView lamps={this.props.lamps}/>
          <GeneralView lamps={this.props.lamps}/>
        </SwipeableViews>
      </div>
    )
  }
}