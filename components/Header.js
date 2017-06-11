import styled from 'styled-components'
import Profile from './Profile'

const Wrapper = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`

const Hr = styled.hr`
  display: block;
  margin: 60px 100px 80px;
  border-color: whitesmoke;
  border-style: solid;
  border-width: 4px;
  opacity: 0.75;
`

export default () =>
  <Wrapper>
    <Profile />
    <Hr />
  </Wrapper>
