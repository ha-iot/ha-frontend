import React from 'react'
import {mount} from 'enzyme'

import NoData from './NoData'

it('renders without crashing', () => {
  mount(<NoData/>)
})
