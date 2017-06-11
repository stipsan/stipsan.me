import { Component } from 'react'
import styled from 'styled-components'
import getDevicePixelRatio from '../utils/device-pixel-ratio'
import getGravatarUrl from '../utils/gravatar'

const ratio = getDevicePixelRatio()

const size = 140
const StyledImg = styled.img`
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  margin-bottom: 20px;
`

const Wrapper = styled.span`
  display: inline-block;
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  background-color: rgba(100, 145, 255, .1);
  /* 3d transform ensures safari clips the picture properly */
  transform: translate3d(0,0,0);

  & img {
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    position: absolute;
    height: ${size}px;
    width: ${size}px;
    transition: all 200ms ease-out;
    filter: blur(${props => (props.imageDidLoad ? 0 : 8)}px);
    will-change: opacity, filter;
  }

  & img:first-child {
    opacity: ${props => (props.imageDidLoad ? 0 : 1)};
    image-rendering: pixelated;
  }
  & img:last-child {
    opacity: ${props => (props.imageDidLoad ? 1 : 0)};
  }
`

let imageDidLoad = false
const src = getGravatarUrl(size * ratio)
export default class Avatar extends Component {
  componentDidMount() {
    if ('Image' in global) {
      const img = new Image()
      img.onload = () => {
        imageDidLoad = true
        this.forceUpdate()
      }
      img.src = src
    }
  }

  render() {
    return (
      <Wrapper imageDidLoad={imageDidLoad}>
        <img src={getGravatarUrl(8)} />
        <img src={imageDidLoad ? src : undefined} />
      </Wrapper>
    )
  }
}
