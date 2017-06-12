import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Mock from '../components/Mock'
import Footer from '../components/Footer'
import Page from '../components/Page'

export default ({ url }) =>
  <Layout url={url}>
    <Page>
      <Helmet title="Projects" />
      <Mock />
      <p>Projects I'm involved in</p>
      <Footer />
    </Page>
  </Layout>
