import styled from 'styled-components'
import Layer from './Layer'

const HrLayer = Layer.extend`
  transform: translateZ(-30vh) scale(1.3);
`

const Hr = styled.div`
  background-color: hsla(0, 0%, 0%, .04);
  height: 8px;
  width: 100%;
  max-width: 634px;
  margin-left: auto;
  margin-right: auto;

  /* Parallax positioning */
  position: absolute;
  left: 50%;
  top: 44.5vh;
  transform: translate(-50%, -50%);
`

export default () => <HrLayer>
  <Hr />
</HrLayer>
