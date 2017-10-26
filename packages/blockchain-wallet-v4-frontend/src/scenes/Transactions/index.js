import React from 'react'
import styled from 'styled-components'

import MenuTop from './MenuTop'
import List from './List'

const Wrapper = styled.div`
  width: 100%;
`

const Transactions = (props) => {
  return (
    <Wrapper>
      <MenuTop />
      <List />
    </Wrapper>
  )
}

export default Transactions