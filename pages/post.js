import Layout from '../components/Layout'
import Mock from '../components/Mock'

export default props =>
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Mock />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }
      .markdown a {
        text-decoration: none;
        color: blue;
      }
      .markdown a:hover {
        opacity: 0.6;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
