import { Component } from 'react'
import Layout from '../components/Layout'
import Mock from '../components/Mock'
import Footer from '../components/Footer'
import Page from '../components/Page'
import 'isomorphic-fetch'

export default class Writings extends Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/stipsan/scroll-into-view-if-needed')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <Layout url={this.props.url}>
        <Page>
          <p>scrollIntoViewIfNeeded has {this.props.stars} ⭐️</p>
          <Footer />
        </Page>
      </Layout>
    )
  }
}
