import styled from 'styled-components'

import Avatar from './Avatar'
import Header from './Header'
import SubHeader from './SubHeader'
import Menu from './Menu'
import Hr from './Hr'

import { headerHeight, navbarHeight } from './dimensions'

const Wrapper = styled.header`
  background: white;
`

export default ({ url }) =>
  <Wrapper>
    <Avatar />
    <Header />
    <SubHeader />
    <Hr />
  </Wrapper>
