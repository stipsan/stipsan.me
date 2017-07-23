import { Component } from 'react'
import styled from 'styled-components'
import getDevicePixelRatio from '../utils/device-pixel-ratio'
import getGravatarUrl from '../utils/gravatar'
import { avatarSize, minAvatarSize } from './dimensions'

const Wrapper = styled.span`
  display: block;
  border-radius: 50%;
  min-height: ${minAvatarSize};
  min-width: ${minAvatarSize};
  min-height: var(--avatar-size);
  min-width: var(--avatar-size);
  height: ${avatarSize};
  width: ${avatarSize};
  overflow: hidden;
  position: relative;
  background-color: rgba(100, 145, 255, .1);

  margin-top: 9.375vh;
  margin-left: auto;
  margin-right: auto;

  & img {
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    position: absolute;
    min-height: ${minAvatarSize};
    min-width: ${minAvatarSize};
    min-height: var(--avatar-size);
    min-width: var(--avatar-size);
    height: ${avatarSize};
    width: ${avatarSize};
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

const ratio = getDevicePixelRatio()
// @TODO calculate this dynamically from 7vh
const size = 140

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
