import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
    connect(null, {
        requestLogin: actions.auth.requestLogin,
    }),
    withHandlers({
        onSubmit: props => values => {
            console.log(values)
            props.requestLogin(values.email, values.password)
        }
    }),
    withProps({
        title: 'Login',
    }),
    reduxForm({
        form: 'login',
    })
)