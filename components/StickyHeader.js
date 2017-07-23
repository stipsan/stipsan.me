import styled from 'styled-components'

import Avatar from './Avatar'
import Header from './Header'
import SubHeader from './SubHeader'
import Hr from './Hr'

const Wrapper = styled.header`
  background: white;
`

export default () =>
  <Wrapper>
    <Avatar />
    <Header />
    <SubHeader />
    <Hr />
  </Wrapper>
