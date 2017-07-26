import { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'

import Layout from '../components/Layout'
import Page from '../components/Page'
import MediumPost from '../components/MediumPost'
import { goldenRatio } from '../components/dimensions'

import 'isomorphic-fetch'

export default class Writings extends Component {
  static propTypes = {
    url: PropTypes.object.isRequired,
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  }

  static async getInitialProps() {
    return {
      posts: [
        {
          title: 'Best kept Jest secret: Testing only changed files with coverage reports',
          url:
            'https://medium.com/@stipsan/best-kept-jest-secret-testing-only-changed-files-with-coverage-reports-3affc8b4d30f',
          image:
            'https://cdn-images-1.medium.com/max/1600/1*mOZlz7BwrFkGIruaRTg5yA.png',
        },
        {
          title: 'Testing with Jest: 15 Awesome Tips and Tricks',
          url:
            'https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262',
          image:
            'https://cdn-images-1.medium.com/max/2000/1*YwGUh_DRzHKRLEjHspRIcQ.jpeg',
        },
      ],
    }
  }

  render() {
    return (
      <Layout url={this.props.url}>
        <Page>
          <Flex wrap>
            {this.props.posts.map(({ title, url, image }, i) =>
              <Box
                key={url}
                p={1}
                width={[
                  1,
                  i % 4 === 1 || i % 4 === 2 ? 1 - goldenRatio : goldenRatio,
                ]}
              >
                <MediumPost title={title} url={url} image={image} />
              </Box>
            )}
          </Flex>
        </Page>
      </Layout>
    )
  }
}
