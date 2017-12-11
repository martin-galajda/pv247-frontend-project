import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
  connect(state => ({
    authError: state.auth.error,
  }), {
    requestLogin: actions.auth.requestLogin,
  }),
  withHandlers({
    onSubmit: props => values => {
      props.requestLogin(values.email, values.password)
    },
  }),
  withProps({
    title: 'Login',
    link: {
      label: 'Don\'t have an account?',
      actionName: 'Sign up',
      href: '/register',
      as: '/register',
      className: 'register',
    },
    actionLabel: 'Login',
  }),
  reduxForm({
    form: 'login',
  }),
)
