import withRedux from '../enhancers/withRedux'
import RegisterForm from '../containers/RegisterForm'
import App from '../components/App'
import RegisterPage from '../components/RegisterPage'

import { compose } from 'recompose'

const IndexPage = () => (
  <App>
    <RegisterPage>
      <RegisterForm />
    </RegisterPage>
  </App>
)

export default compose(withRedux)(IndexPage)
