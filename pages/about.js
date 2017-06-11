import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Mock from '../components/Mock'

import faker from 'faker'

export default () =>
  <Layout>
    <Helmet title="About" />
    <Mock />
    <p>This is the about page</p>
  </Layout>
