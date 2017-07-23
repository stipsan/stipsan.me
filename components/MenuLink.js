import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.a`
  cursor: pointer;
  color: ${props => (props.isActive ? 'white' : '#0f0f0f')};
  background-color: ${props => (props.isActive ? '#0f0f0f' : 'transparent')};
  display: inline-block;
  margin-left: 0 12px;
  padding: 3px 8px 4px 8px;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  touch-action: manipulation;
`

const MenuLink = ({url, href, children}) => <Link href={href}><StyledLink
  href={`${href}`}
  isActive={href === url.pathname}
>
  {children}
</StyledLink>
</Link>

MenuLink.propTypes = {
  url: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MenuLink
