import { PureComponent } from 'react'
import deepAssign from 'deep-assign'
import styled from 'styled-components'
import trianglify from 'trianglify'

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`

export default class TrianglifyCanvas extends PureComponent {
  static defaultProps = deepAssign({}, trianglify.defaults, {
    seed: Math.random(),
  })

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  setCanvas = canvas => {
    this.canvas = canvas
  }

  debounceResize = () => {
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(this.handleResize, 100)
  }

  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  debounceRender = () => {
    clearTimeout(this.renderTimeout)
    this.renderTimeout = setTimeout(this.renderCanvas, 300)
  }

  renderCanvas = () => {
    trianglify({ ...this.props, ...this.state }).canvas(this.canvas)
  }

  componentDidMount() {
    window.addEventListener('resize', this.debounceResize)

    this.renderCanvas()
  }

  componentDidUpdate() {
    this.debounceRender()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debounceResize)
  }

  render() {
    return <Canvas innerRef={this.setCanvas} />
  }
}
