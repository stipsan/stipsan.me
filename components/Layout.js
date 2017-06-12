import styled, { injectGlobal } from 'styled-components'
import systemFontStack from 'system-font-stack'
import Header from './Header'
import Meta from './Meta'
import { initGA, logPageView } from '../utils/analytics'

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
  }

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
  static defaultProps = {
    isIndex: false,
  }

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
        <div id="top" />
        <Meta />
        <Header url={this.props.url} />
        <div id="content" />
        {this.props.children}
      </Wrapper>
    )
  }
}
