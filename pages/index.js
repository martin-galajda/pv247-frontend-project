import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import App from '../components/App'
import Layout from '../containers/Layout'

const HomePage = () => (
  <App>
    <Layout>
        Content...
    </Layout>
  </App>
)

export default withRedux(withAuth(HomePage))

