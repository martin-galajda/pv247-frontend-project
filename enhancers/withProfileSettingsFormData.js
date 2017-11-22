import { connect } from 'react-redux'
import { actions } from '../redux'
import { withHandlers, compose } from 'recompose'

export default compose(
  connect(store => ({
    values: store.form && store.form.profile ? store.form.profile.values : null,
    user: store.user,
  }), {
    updateUser: actions.user.requestUpdateUserData,
  }),
  withHandlers({
    onSave: props => () => {
      const values = props.values
      const userData = {
        email: values.email,
        customData: {
          firstName: values.firstName,
          lastName: values.lastName,
          profileImageUrl: props.user.temporaryAvatarImageUrl,
        },
      }
      props.updateUser(userData)
      props.closeModal()
    }
  }),
)