import styled from 'styled-components'
import Link from 'next/link'

const StyledNav = styled.span`
  margin-right: 15px;
`

const Header = () =>
  <div>
    <Link href="/">
      <a><StyledNav>Home</StyledNav></a>
    </Link>
    <Link href="/about">
      <a><StyledNav>About</StyledNav></a>
    </Link>
  </div>

export default Header
