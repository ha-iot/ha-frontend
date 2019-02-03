import React from 'react'
import styled from 'styled-components'
import {InfoOutlined as InfoIcon} from '@material-ui/icons'
import {AppBar as MuiAppBar, IconButton, Typography} from '@material-ui/core'

const MainRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row !important;
  justify-content: space-between;
`

const Title = styled(Typography)`
  margin-left: 1em !important;
`


function AppBar() {
  return (
    <MuiAppBar>
      <MainRow>
        <Title variant="h6" color="inherit">HAIoT</Title>
        <IconButton color="inherit">
          <InfoIcon/>
        </IconButton>
      </MainRow>
    </MuiAppBar>
  )
}

export default AppBar
