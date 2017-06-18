import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import systemFontStack from 'system-font-stack'
import Helmet from 'react-helmet'
import NoSSR from 'react-no-ssr'

import StickyHeader from './StickyHeader'
import Menu from './Menu'
import Meta from './Meta'
import Header from './Header'
import SubHeader from './SubHeader'
import Hr from './Hr'
import Avatar from './Avatar'
import TrianglifyCanvas from './TrianglifyCanvas'

import { initGA, logPageView } from '../utils/analytics'
import { minAvatarSize } from './dimensions'

const debug = true

injectGlobal`

  :root {
    --avatar-size: ${minAvatarSize};
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  html {
    overflow: hidden;
    height: 100vh;
    height: 100%;
  }

  body {
    font-family: ${systemFontStack};
  }

  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.section`
  height: 500px;
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  will-change: scroll-position;
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
      <ThemeProvider
        theme={{
          breakpoints: [24, 32],
        }}
      >
        <div>
          <NoSSR><TrianglifyCanvas /></NoSSR>
          <Wrapper>
            <Helmet>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Helmet>
            <StickyHeader url={this.props.url} />
            <Meta />
            {this.props.children}
          </Wrapper>
        </div>
      </ThemeProvider>
    )
  }
}
