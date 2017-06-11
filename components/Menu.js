import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled.span`
  margin-right: 15px;
`

const Nav = styled.nav`
  text-align: center;
  position: -webkit-sticky;
  position: sticky;
  top: 1px;
  width: 100%;
`

export default () =>
  <Nav>
    <Link href="/#top">
      <a><StyledLink>Home</StyledLink></a>
    </Link>
    <Link href="/about#top">
      <a><StyledLink>About</StyledLink></a>
    </Link>
  </Nav>
