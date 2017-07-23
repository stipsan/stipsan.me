import PropTypes from 'prop-types'
import styled from 'styled-components'
import MenuLink from './MenuLink'

const Nav = styled.nav`
  text-align: center;
  width: 100%;
  padding: 20px 0;
  box-shadow: hsla(0, 0%, 0%, .05) 0 1px 0 0;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  right: 0;
  left: 0;
  background-color: white;
  z-index: 1;
`

const links = [
  ['/', 'Writings'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
]
const Menu = ({ url }) =>
  <Nav>
    {links.map(([href, title]) =>
      <MenuLink key={href} href={href} url={url}>
        {title}
      </MenuLink>
    )}
  </Nav>

Menu.propTypes = {
  url: PropTypes.object.isRequired
}

export default Menu
