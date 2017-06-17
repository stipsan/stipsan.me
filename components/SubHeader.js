import styled from 'styled-components'

/* translateZ(-42vh) scale(1.42); */
const Subheader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: hsla(0, 0%, 0%, .5);
  margin: 0 auto;
  text-align: center;
  position: absolute;
  left: 10px;
  top: 30.859vh;
  right: 10px;
  transform: translateY(-50%);

  & span {
    font-weight: 600;
    white-space: nowrap;
  }
`

export default () =>
  <Subheader>
    I'm a <span>Frontend engineer</span> & <span>open-sourcerer</span>
  </Subheader>
