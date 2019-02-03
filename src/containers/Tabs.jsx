import React from 'react'
import styled from 'styled-components'
import SwipeableViews from 'react-swipeable-views'
import {Tab as MuiTab, Tabs as MuiTabs} from '@material-ui/core'

import NoData from './NoData'
import NoLamps from './NoLamps'
import LampsView from './LampsView'
import GeneralView from './GeneralView'

const Root = styled.div`
  margin-top: 3em;
`

const Tabs = styled(MuiTabs)`
  width: 100%;
`

const Tab = styled(MuiTab)`
  flex-grow: 1;
`

class MenuTabs extends React.Component {
  state = {slideIndex: 0}

  handleSwipe = value => {
    this.setState({slideIndex: value})
  }

  handleTabClick = (e, value) => {
    this.setState({slideIndex: value})
  }

  render() {
    const {lamps} = this.props
    const {slideIndex} = this.state
    return (
      <Root>
        <Tabs value={slideIndex}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              onChange={this.handleTabClick}>
          <Tab label="Lâmpadas"/>
          <Tab label="Geral"/>
        </Tabs>
        <SwipeableViews index={slideIndex} onChangeIndex={this.handleSwipe}>
          {!lamps.raw ? lamps.length ? <LampsView lamps={lamps}/> : <NoLamps/> : <NoData/>}
          {!lamps.raw ? lamps.length ? <GeneralView lamps={lamps}/> : <NoLamps/> : <NoData/>}
        </SwipeableViews>
      </Root>
    )
  }
}

export default MenuTabs
