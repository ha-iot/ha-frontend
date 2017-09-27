import React from 'react'
import {Tabs, Tab} from 'material-ui'
import SwipeableViews from 'react-swipeable-views'

import NoData from './NoData'
import NoLamps from './NoLamps'
import LampsView from './LampsView'
import GeneralView from './GeneralView'

export default class MenuTabs extends React.Component {
  constructor() {
    super()

    this.state = {
      slideIndex: 0
    }
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
          {!this.props.lamps.raw ? this.props.lamps.length ? <LampsView lamps={this.props.lamps}/> : <NoLamps/> : <NoData/>}
          {!this.props.lamps.raw ? this.props.lamps.length ? <GeneralView lamps={this.props.lamps}/> : <NoLamps/>: <NoData/>}
        </SwipeableViews>
      </div>
    )
  }
}
