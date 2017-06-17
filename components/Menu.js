import styled from 'styled-components'
import Link from 'next/link'
import MenuLink from './MenuLink'
import { headerHeight, navbarHeight } from './dimensions'

const StyledLink = styled.span`
  margin-right: 15px;
  transition-duration: 1500ms;
  transition-timing-function:  ease-out;
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
  <Nav>
    {links.map(([href, title]) =>
      <MenuLink key={href} href={href} url={url}>{title}</MenuLink>
    )}
  </Nav>
