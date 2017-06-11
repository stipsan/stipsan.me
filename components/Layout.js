import styled, { injectGlobal } from 'styled-components'
import systemFontStack from 'system-font-stack'
import Header from './Header'
import Meta from './Meta'
import { initGA, logPageView } from '../utils/analytics'

injectGlobal`
  body {
    font-family: ${systemFontStack};
  }
`

const Wrapper = styled.section`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`

export default class Layout extends React.Component {
  componentDidMount() {
    if (!process.env.TRACKING_ID) {
      // bail out if env var isn't set
      return
    }
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render() {
    return (
      <Wrapper>
        <Meta />
        <Header />
        {this.props.children}
      </Wrapper>
    )
  }
}
