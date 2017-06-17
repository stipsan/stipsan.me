import styled, { injectGlobal } from 'styled-components'
import systemFontStack from 'system-font-stack'
import Helmet from 'react-helmet'
import Menu from './Menu'
import Meta from './Meta'
import Header from './Header'
import SubHeader from './SubHeader'
import Hr from './Hr'
import Avatar from './Avatar'
import { initGA, logPageView } from '../utils/analytics'
import { minAvatarSize } from './dimensions'

const debug = false

injectGlobal`

  :root {
    --avatar-size: ${minAvatarSize};
  }

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

const Ruler = styled.div`
position: absolute;
width: 100%;
background: blue;
height: 1px;
z-index: 10000;
pointer-events: none;
`
const AvatarRuler = Ruler.extend`
  top: 9.375vh;
`
const HeaderRuler = Ruler.extend`
  top: 23.144vh;
`
const SubHeaderRuler = Ruler.extend`
  top: 30.859vh;
`
const HrRuler = Ruler.extend`
  top: 38.671vh;
`

const Red = styled.div`
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: red;
  position: absolute;
`
const Blue = styled.div`
  top: 100vh;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: blue;
  position: absolute;
`

const Wrapper = styled.section`
  background: white;
  height: 500px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 100vh;
  perspective-origin: 50% 0;
  -webkit-overflow-scrolling: touch;

  background: linear-gradient(0deg, #FFFFFF 2px, rgba(0,0,0,0) 2px), linear-gradient(90deg, #FFFFFF 2px, rgba(0,0,0,0) 2px), linear-gradient(0deg, rgba(255,255,255,0.298039) 1px, rgba(0,0,0,0) 1px), linear-gradient(90deg, rgba(255,255,255,0.298039) 1px, rgba(0,0,0,0) 1px), rgb(34, 102, 153);
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;

  background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/concrete-texture.png);
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
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Avatar />
        <Header />
        <SubHeader />
        <Hr />
        {debug && <AvatarRuler />}
        {debug && <HeaderRuler />}
        {debug && <SubHeaderRuler />}
        {debug && <HrRuler />}
        {debug && <Red />}
        {debug && <Blue />}
        <Meta />
        <Menu url={this.props.url} />
        {this.props.children}
      </Wrapper>
    )
  }
}
