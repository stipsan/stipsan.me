import { PureComponent } from 'react'
import deepAssign from 'deep-assign'
import styled from 'styled-components'
import trianglify from 'trianglify'

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`
const CanvasContext = styled.canvas`
position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 1;
`

export default class TrianglifyCanvas extends PureComponent {
  static defaultProps = deepAssign({}, trianglify.defaults)

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  setCanvas = canvas => {
    this.canvas = canvas
    console.log(canvas)
  }

  renderCanvas = () => {
    trianglify({ ...this.props, ...this.state }).canvas(this.canvas)
  }

  componentDidMount() {
    this.renderCanvas()
  }

  render() {
    return (
      <CanvasContainer>
        <CanvasContext innerRef={this.setCanvas} />
      </CanvasContainer>
    )
  }
}
