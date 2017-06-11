import { Component } from 'react'
import styled from 'styled-components'
import getDevicePixelRatio from '../utils/device-pixel-ratio'
import getGravatarUrl from '../utils/gravatar'

const ratio = getDevicePixelRatio()

const size = 80
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

  & img, &::before {
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    height: ${size}px;
    width: ${size}px;
    transition: opacity 150ms ease-in-out;
  }

  & img:first-child {
    content: url(${getGravatarUrl(4)});
    /*opacity: ${props => (props.imageDidLoad ? 0 : 1)};*/
    clip: rect(0px,40px,80px,0px);
    image-rendering: pixelated;
  }
  & img:last-child {
    /*opacity: ${props => (props.imageDidLoad ? 1 : 0)};*/
    clip: rect(0px,40px,80px,0px);
  }
`

const src = getGravatarUrl(size * ratio)
export default class Avatar extends Component {
  state = { imageDidLoad: false }

  componentDidMount() {
    if ('Image' in global) {
      const img = new Image()
      img.onload = () => this.setState({ imageDidLoad: true })
      img.src = src
    }
  }

  render() {
    return (
      <Wrapper imageDidLoad={this.state.imageDidLoad}>
        <img src={getGravatarUrl(8)} />
        <img src={this.state.imageDidLoad ? src : undefined} />
      </Wrapper>
    )
  }
}
