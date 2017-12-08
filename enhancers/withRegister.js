import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
  connect(null, {
    onClick: actions.auth.requestRegister,
  }),
  withHandlers({
    onSubmit: props => values => {
      props.onClick(values.email, values.password)
    },
  }),
  withProps({
    title: 'Register',
  }),
  reduxForm({
    form: 'register',
  }),
)
