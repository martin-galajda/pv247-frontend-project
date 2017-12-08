import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import App from '../components/App'
import Layout from '../containers/Layout'
import ChannelMessages from '../containers/ChannelMessages'

const ChannelPage = props => (
  <App>
    <Layout>
      <ChannelMessages {...props} />
    </Layout>
  </App>
)

export default withRedux(withAuth(ChannelPage))

