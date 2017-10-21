import React from 'react'
import {mount} from 'enzyme'

import NoLamps from './NoLamps'

it('renders without crashing', () => {
  mount(<NoLamps/>)
})
