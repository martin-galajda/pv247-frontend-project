import withRedux from '../enhancers/withRedux'
import AuthForm from '../containers/RegisterForm'
import App from '../components/App'
import RegisterPage from '../components/RegisterPage'

import { compose } from 'recompose'

const IndexPage = () => (
  <App>
    <RegisterPage>
      <AuthForm />
    </RegisterPage>
  </App>
)

export default compose(withRedux)(IndexPage)
