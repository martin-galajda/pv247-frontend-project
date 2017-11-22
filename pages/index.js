import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import LoginForm from '../containers/LoginForm'
import App from '../components/App'

import { compose, lifecycle } from 'recompose'
const IndexPage = () => (
    <App>
        <LoginForm />
    </App>
)

export default compose(
    withRedux,
    withAuth
)(IndexPage)
