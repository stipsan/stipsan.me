import styled from 'styled-components'
import Link from 'next/link'
import MenuLink from './MenuLink'
import Layer from './Layer'
import { headerHeight, navbarHeight } from './dimensions'

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  height: ${headerHeight};
  background-color: hsla(0, 0%, 100%, .75);
  background-color: white;
  top: calc(-${headerHeight} + ${navbarHeight});
  position: -webkit-sticky;
  position: sticky;
  transform-style: preserve-3d;
  z-index: 1;
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png");
  background-attachment: fixed;
`

const StyledLink = styled.span`
  margin-right: 15px;
  transition-duration: 1500ms;
  transition-timing-function:  ease-out;
`
const HomeLink = StyledLink.extend`
  transition-property: opacity;
  cursor: ${props => (props.isHidden ? 'default' : 'pointer')};
  pointer-events: ${props => (props.isHidden ? 'hidden' : 'auto')};
`
const OtherLink = StyledLink.extend`
  transition-property: opacity, background-color, color;
`

const Nav = styled.nav`
  text-align: center;
  width: 100%;
  padding: 20px 0;
  box-shadow: hsla(0, 0%, 0%, .05) 0 1px 0 0;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`

const links = [
  ['/', 'Writings'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
]
export default ({ url }) =>
<Wrapper>
  <Nav>
    {links.map(([href, title]) =>
      <MenuLink key={href} href={href} url={url}>{title}</MenuLink>
    )}
  </Nav>
</Wrapper>
