import React from 'react'
import {Tabs, Tab} from 'material-ui'
import SwipeableViews from 'react-swipeable-views'

import NoData from './NoData'
import NoLamps from './NoLamps'
import LampsView from './LampsView'
import GeneralView from './GeneralView'

export default class MenuTabs extends React.Component {
  state = {slideIndex: 0}

  handleChange = (value) => {
    this.setState({slideIndex: value})
  }

  render() {
    const {lamps} = this.props
    const {slideIndex} = this.state
    return (
      <div>
        <Tabs onChange={this.handleChange} value={slideIndex}>
          <Tab label="Lâmpadas" value={0}/>
          <Tab label="Geral" value={1}/>
        </Tabs>
        <SwipeableViews index={slideIndex} onChangeIndex={this.handleChange}>
          {!lamps.raw ? lamps.length ? <LampsView lamps={lamps}/> : <NoLamps/> : <NoData/>}
          {!lamps.raw ? lamps.length ? <GeneralView lamps={lamps}/> : <NoLamps/>: <NoData/>}
        </SwipeableViews>
      </div>
    )
  }
}
