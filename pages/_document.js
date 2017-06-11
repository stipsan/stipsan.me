import Document, { Head, Main, NextScript } from 'next/document'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

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
    return <Helmet htmlAttributes={{ lang: 'en' }} />
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
