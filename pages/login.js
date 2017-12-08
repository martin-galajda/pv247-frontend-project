import withRedux from '../enhancers/withRedux'
import withAuth from '../enhancers/withAuth'
import LoginForm from '../containers/LoginForm'
import App from '../components/App'
import RegisterPage from '../components/RegisterPage'

import { compose } from 'recompose'

const IndexPage = () => (
  <App>
    <RegisterPage>
      <LoginForm />
    </RegisterPage>
  </App>
)

export default compose(
  withRedux,
  withAuth,
)(IndexPage)
