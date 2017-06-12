import styled from 'styled-components'
import Profile from './Profile'
import Menu from './Menu'
import { headerHeight, navbarHeight } from './dimensions'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  height: ${headerHeight};
  background: hsla(0, 0%, 100%, .25);
  backdrop-filter: blur(20px);
  background-color: hsla(0, 0%, 100%, .75);
  top: calc(-${headerHeight} + ${navbarHeight});
  position: -webkit-sticky;
  position: sticky;
`

const Hr = styled.hr`
  display: block;
  margin: 60px 100px 80px;
  border-color: whitesmoke;
  border-style: solid;
  border-width: 4px;
  opacity: 0.75;
`

export default ({ url }) =>
  <Wrapper>
    <Profile />
    <Hr />
    <Menu url={url} />
  </Wrapper>
