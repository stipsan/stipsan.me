import Helmet from 'react-helmet'
import Markdown from 'react-markdown'

import Layout from '../components/Layout'
import Mock from '../components/Mock'
import Footer from '../components/Footer'
import Page from '../components/Page'

export default ({ url }) =>
  <Layout url={url}>
    <Page>
      <Helmet title="About" />
      <Markdown
        source={`
# Test
Is this shit working?
      `}
      />
      <Footer />
    </Page>
  </Layout>
