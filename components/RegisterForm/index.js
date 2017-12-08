import { Form, FormInput, Container, LinkNavigation, FormBackground } from './styled'
import Link from 'next/link'
import propTypes from 'prop-types'
import { Field } from 'redux-form'

const LoginForm = ({ handleSubmit, pristine, submitting }) => (
  <Container>
    <FormBackground />
    <Form onSubmit={handleSubmit}>
      <FormInput>
        <label> Email </label>
        <Field
          name="email"
          component="input"
          type="email"
        />
      </FormInput>
      <FormInput>
        <label> Password </label>
        <Field
          name="password"
          component="input"
          type="password"
        />
      </FormInput>

      <FormInput>
        <button type="submit" disabled={pristine || submitting}>
                  Register
        </button>
      </FormInput>
    </Form>
    <LinkNavigation>
        Already have an account?
      <Link href="/register" as="/login"><a className="login">Sign in</a></Link>
    </LinkNavigation>
  </Container>
)

LoginForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  pristine: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
}

export default LoginForm
