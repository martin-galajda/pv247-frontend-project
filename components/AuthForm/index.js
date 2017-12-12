import {
  Form,
  FormInput,
  Container,
  LinkNavigation,
  FormBackground,
  FormErrors,
} from './styled'
import Link from 'next/link'
import propTypes from 'prop-types'
import { Field } from 'redux-form'
import makeHideable from '../../enhancers/makeHideable'

const HideableFormErrors = makeHideable(FormErrors)

const AuthForm = ({ handleSubmit, pristine, submitting, authError, link, actionLabel }) => (
  <Container>
    <FormBackground />
    <Form onSubmit={handleSubmit}>
      <HideableFormErrors show={authError !== null}>
        {authError}
      </HideableFormErrors>
      <FormInput>
        <label>Email</label>
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
          {actionLabel}
        </button>
      </FormInput>
    </Form>
    <LinkNavigation>
      {link.label}
      <Link href={link.href} as={link.as}><a className={link.className}>{link.actionName}</a></Link>
    </LinkNavigation>
  </Container>
)

AuthForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  pristine: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
  authError: propTypes.string,
  actionLabel: propTypes.string.isRequired,
  link: propTypes.shape({
    as: propTypes.string.isRequired,
    href: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    actionName: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
  }).isRequired,
}

AuthForm.defaultProps = {
  authError: null,
}

export default AuthForm
