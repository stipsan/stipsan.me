import styled from 'styled-components'
import Avatar from './Avatar'
import Logo from '../svgs/logo.svg'

const Wrapper = styled.section`
padding: 80px 40px 0;
`

const Header = styled.h1`
  font-weight: 600;
  letter-spacing: -2px;
  font-size: 3em;
  color: #222;
  margin-top: 0;
  margin-bottom: 0;
`
const Subheader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #aaa;
  margin-top: 40px;
  position: relative;

  & span:first-child,
  & span:last-child {
    position: absolute;
  }

  & span:first-child {
    right: 50%;
    margin-right: 40px;
    text-align: right;
  }

  & span:last-child {
    left: 50%;
    margin-left: 40px;
    text-align: left;
  }
`

const size = 64
const LogoLink = styled.a.attrs({
  href: 'https://24nettbutikk.no/',
  title: "24Nettbutikk.no - Norway's favorite ecommerce platform",
  target: '_blank',
})`
  display: inline-block;
  transform: translateY(-25px);
  height: ${size}px;
  width: ${size}px;
  & svg {
    height: inherit;
    width: inherit;
  }

  & svg path {
    transition: fill 150ms linear;
  }
  & svg path:last-child {
    transition-delay: 37.5ms;
  }
  &:not(:hover) svg path:first-child {
    fill: hsla(240, 1%, 30%, 0.25);
  }
  &:not(:hover) svg path:last-child {

    fill: hsla(98, 0%, 52%, 0.25);
  }
`

export default () =>
  <Wrapper>
    <Avatar />
    <Header>Stian Didriksen</Header>
    <Subheader>
      <span>Frontend Engineer at</span>
      <LogoLink>
        <Logo />
      </LogoLink>
      <span>the Future of Commerce</span>
    </Subheader>
  </Wrapper>
