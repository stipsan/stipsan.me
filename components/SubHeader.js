import styled from 'styled-components'

/* translateZ(-42vh) scale(1.42); */
const Subheader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: hsla(0, 0%, 0%, .5);
  margin: 0 auto;
  text-align: center;
  display: block;
  margin-left: 10px;
  margin-top: 3.859vh;
  margin-right: 10px;

  & span {
    font-weight: 600;
    white-space: nowrap;
  }
`

export default () =>
  <Subheader>
    I&apos;m a <span>frontend engineer</span> &amp; <span>open-sourcerer</span>
  </Subheader>
