import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Page from '../components/Page'

const About = ({ url }) => <Layout url={url}>
    <Page>
      <Helmet title="About" />
      <article>
        <h2>This site is under construction...</h2>
      </article>
    </Page>
  </Layout>

About.propTypes = {
  url: PropTypes.object.isRequired
}

export default About
