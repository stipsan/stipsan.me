import styled from 'styled-components'
import { navbarHeight } from './dimensions'

export default styled.section`
  background: #f7f7f7;
  padding: 20px 0;
  min-height: 100vh;
  min-height: calc(100vh - ${navbarHeight});
  /* just testing scroll effect */
  min-height: calc(138vh - ${navbarHeight});
  overflow: hidden;


  
`
