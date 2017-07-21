import styled from 'styled-components'
import { maxWidth } from './dimensions'

const Hr = styled.div`
  background-color: hsla(0, 0%, 0%, .02);
  height: 4px;
  max-width: ${maxWidth};
  margin-left: auto;
  margin-right: auto;

  display: block;
  margin-top: 6.671vh;
  margin-bottom: 6.671vh;
`

export default () => <Hr />
