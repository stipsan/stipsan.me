import styled from 'styled-components'
import { maxWidth } from './dimensions'

const Hr = styled.div`
  background-color: hsla(0, 0%, 0%, .02);
  height: 4px;
  max-width: ${maxWidth};
  margin-left: auto;
  margin-right: auto;

  position: absolute;
  left: 10px;
  right: 10px;
  top: 38.671vh;
`

export default () => <Hr />
