import { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Mock from '../components/Mock'
import Footer from '../components/Footer'
import Page from '../components/Page'
import 'isomorphic-fetch'

export default class Projects extends Component {
  static async getInitialProps() {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/stipsan/ioredis-mock')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  render() {
    return (
      <Layout url={this.props.url}>
        <Page>
          <Helmet title="Projects" />
          <p>ioredisMock has {this.props.stars} ⭐️</p>
        </Page>
      </Layout>
    )
  }
}
