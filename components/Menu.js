import styled from 'styled-components'
import Link from 'next/link'
import MenuLink from './MenuLink'

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
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 20px 0;
  background-color: hsla(0, 0%, 100%, .75);
  box-shadow: hsla(0, 0%, 0%, .05) 0 1px 0 0;
  backdrop-filter: blur(20px);
`

const links = [
  ['/writings', 'Writings'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
]
export default ({ url }) =>
  <Nav>
    <MenuLink key="/" href="/" suffix="#top" url={url}>Hello</MenuLink>
    {links.map(([href, title]) =>
      <MenuLink key={href} href={href} url={url}>{title}</MenuLink>
    )}
  </Nav>
