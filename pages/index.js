import { Component } from 'react'
import { Flex, Box } from 'grid-styled'

import Layout from '../components/Layout'
import Mock from '../components/Mock'
import Footer from '../components/Footer'
import Page from '../components/Page'
import MediumPost from '../components/MediumPost'
import { goldenRatio } from '../components/dimensions'

import 'isomorphic-fetch'

export default class Writings extends Component {
  static async getInitialProps() {
    const title = 'Testing with Jest: 15 Awesome Tips and Tricks'
    const url =
      'https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262'
    const image =
      'https://cdn-images-1.medium.com/max/2000/1*YwGUh_DRzHKRLEjHspRIcQ.jpeg'
    return {
      posts: [
        { title, url, image },
        { title, url, image },
        { title, url, image },
        { title, url, image },
        { title, url, image },
        { title, url, image },
        { title, url, image },
        { title, url, image },
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
          <Footer />
        </Page>
      </Layout>
    )
  }
}
