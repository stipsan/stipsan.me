import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'
import { AppleTouchIcon, Icon, TileImage } from '../components/Icons'

export default class MyDocument extends Document {
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetHeadComponents() {
    return (
      Object.keys(this.props.helmet)
        // remove htmlAttributes which is not for <head> but for <html>
        .filter(el => el !== 'htmlAttributes')
        .map(el => this.props.helmet[el].toComponent())
        .filter(el => el.length > 0)
    )
  }

  get helmetJsx() {
    return (
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <AppleTouchIcon size="114" />
        <AppleTouchIcon size="120" />
        <AppleTouchIcon size="144" />
        <AppleTouchIcon size="152" />
        <AppleTouchIcon size="180" />
        <AppleTouchIcon size="57" />
        <AppleTouchIcon size="76" />
        <AppleTouchIcon size="80" />
        <Icon size="16" />
        <Icon size="192" />
        <Icon size="32" />
        <Icon size="96" />
        <TileImage size="144" />
      </Helmet>
    )
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
