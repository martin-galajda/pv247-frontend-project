import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import Header from '../components/Header'
import App from '../components/App'
import Router from 'next/router'
import Layout from '../containers/Layout'
import ChannelMessages from '../containers/ChannelMessages'

const ChannelPage = props => (
  <App>
    <Layout>
      <ChannelMessages {...props} />
    </Layout>
  </App>
)

ChannelPage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default withRedux(withAuth(ChannelPage))

