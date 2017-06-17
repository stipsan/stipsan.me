import styled from 'styled-components'
import Layer from './Layer'

/* translateZ(-42vh) scale(1.42); */
const Subheader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #aaa;

  /* Parallax positioning */
  position: absolute;
  left: 50%;
  top: 59%;
  top: 35.7vh;
  transform: translate(-50%, -50%);
`

export default () => <Layer>
  <Subheader>
    I'm a <span>Frontend engineer</span> & <span>open-sourcerer</span>
  </Subheader>
</Layer>
