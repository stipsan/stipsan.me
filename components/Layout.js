import styled, { injectGlobal } from 'styled-components'
import systemFontStack from 'system-font-stack'
import Header from './Header'
import Meta from './Meta'
import Menu from './Menu'
import { initGA, logPageView } from '../utils/analytics'

injectGlobal`
  body {
    font-family: ${systemFontStack};
  }

  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.section`
  background: white;
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
        <div id="top" />
        <Menu />
        {this.props.children}
      </Wrapper>
    )
  }
}
