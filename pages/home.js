import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import Header from '../components/Header'
import App from '../components/App'
import Router from 'next/router'
import Layout from '../containers/Layout'

const HomePage = () => (
    <App>
        <Layout>
            Content...
        </Layout>
    </App>
)

export default withRedux(withAuth(HomePage))

