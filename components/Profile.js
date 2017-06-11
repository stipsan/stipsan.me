import styled from 'styled-components'
import Avatar from './Avatar'

const Wrapper = styled.section`
padding: 80px 40px 0;
`

const Header = styled.h1`
  font-weight: 600;
  letter-spacing: -2px;
  font-size: 3em;
  color: #222;
  margin-top: 0;
  margin-bottom: 0;
`
const Subheader = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #aaa;
  margin-top: 40px;
  position: relative;

  & span:first-child,
  & span:last-child {
    position: absolute;
  }

  & span:first-child {
    right: 50%;
    margin-right: 48px;
    text-align: right;
  }

  & span:last-child {
    left: 50%;
    margin-left: 48px;
    text-align: left;
  }
`

export default () =>
  <Wrapper>
    <Avatar />
    <Header>Stian Didriksen</Header>
    <Subheader>
      <span>Frontend Engineer at</span>
      24
      <span>the Future of Commerce</span>
    </Subheader>
  </Wrapper>
