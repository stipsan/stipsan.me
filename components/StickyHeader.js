import styled from 'styled-components'

import Avatar from './Avatar'
import Header from './Header'
import SubHeader from './SubHeader'
import Menu from './Menu'
import Hr from './Hr'

import { headerHeight, navbarHeight } from './dimensions'

const StickyHeader = styled.header`
  position: -webkit-sticky;
  position: sticky;
  height: ${headerHeight};
  top: calc(-${headerHeight} + ${navbarHeight});
  z-index: 1;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.9) 66px, rgba(255, 255, 255, 0.5));
  will-change: transform;

  @supports (backdrop-filter: blur(17px)) or (-webkit-backdrop-filter: blur(17px)) {
    backdrop-filter: blur(17px);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.4) 66px, rgba(255, 255, 255, 0.1));
  }
`

export default ({ url }) =>
  <StickyHeader>
    <Avatar />
    <Header />
    <SubHeader />
    <Hr />
    <Menu url={url} />
  </StickyHeader>
