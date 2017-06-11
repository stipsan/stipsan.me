import styled from 'styled-components'
import Header from './Header'
import { initGA, logPageView } from '../utils/analytics'

const Wrapper = styled.section`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
      </Wrapper>
    )
  }
}
