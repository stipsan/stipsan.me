import styled from 'styled-components'
import Avatar from './Avatar'
import Logo from '../svgs/logo.svg'
import { headerHeight, navbarHeight } from './dimensions'

const Wrapper = styled.section`
  height: calc(${headerHeight} - ${navbarHeight});
  transform-style: preserve-3d;
`

const Hr = styled.hr`
  display: block;
  margin: 60px 100px 80px;
  border-color: whitesmoke;
  border-style: solid;
  border-width: 4px;
  opacity: 0.75;
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

    <Layer>
      <Subheader>
        I'm a Frontend engineer & open-sourcerer
      </Subheader>
    </Layer>
    <Layer><Hr /></Layer>
  </Wrapper>
