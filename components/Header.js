import styled from 'styled-components'
import Link from 'next/link'

import Router from 'next/router'
console.log(Router, Router.scrollToHash, Router.push)

import Profile from './Profile'

const StyledNav = styled.span`
  margin-right: 15px;
`

const Header = () =>
  <div>
    <Profile />
    <div id="top" />
    <nav>
      <Link href="/#top">
        <a><StyledNav>Home</StyledNav></a>
      </Link>
      <Link href="/about#top">
        <a><StyledNav>About</StyledNav></a>
      </Link>
    </nav>
  </div>

export default Header
