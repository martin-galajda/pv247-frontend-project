import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
  connect(state => ({
    authError: state.auth.error,
  }), {
    onClick: actions.auth.requestRegister,
  }),
  withHandlers({
    onSubmit: props => values => {
      props.onClick(values.email, values.password)
    },
  }),
  withProps({
    title: 'Register',
    link: {
      label: 'Already have an account?',
      actionName: 'Sign in',
      href: '/login',
      as: '/login',
      className: 'login',
    },
    actionLabel: 'Register',
  }),
  reduxForm({
    form: 'register',
  }),
)
