import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import App from '../containers/App'
import HomeContent from '../components/HomeContent'
import Layout from '../containers/Layout'

const HomePage = () => (
  <App>
    <Layout>
      <HomeContent />
    </Layout>
  </App>
)

export default withRedux(withAuth(HomePage))

