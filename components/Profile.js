import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { StyledImg } from './Avatar'

const Avatar = dynamic(import('./Avatar'), {
  loading: StyledImg.withComponent('span'),
  ssr: false,
})

const Wrapper = styled.section`
padding: 100px 40px 0;
max-width: 600px;
margin: 0 auto;
text-align: center;
`

const Header = styled.h1`
  font-weight: 600;
  letter-spacing: -2px;
  font-size: 3em;
  color: #222;
  margin-top: 0;
`

export default () =>
  <Wrapper>
    <Avatar />
    <Header>Stian Didriksen</Header>
  </Wrapper>
