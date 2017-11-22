import withRedux from '../enhancers/withRedux'
import RegisterForm from '../containers/RegisterForm'
import App from '../components/App'

import { compose, lifecycle } from 'recompose'

const IndexPage = () => (
    <App>
        <RegisterForm />
    </App>
)

export default compose(
    withRedux,
)(IndexPage)
