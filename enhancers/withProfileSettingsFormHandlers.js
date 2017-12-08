import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
  connect(store => ({
    initialValues: {
      email: store.user.currentUser.email,
      firstName: store.user.currentUser.customData ? store.user.currentUser.customData.firstName : '',
      lastName: store.user.currentUser.customData ? store.user.currentUser.customData.lastName : '',
    },
    uploadingFile: store.fileUpload.isUploading,
    user: store.user.currentUser,
  }), {
    uploadFile: actions.fileUpload.requestUploadFile,
    uploadUserAvatarImage: actions.user.updateUserAvatarImage,
  }),
  withHandlers({
    onDrop: props => acceptedFiles => acceptedFiles.forEach(file => {
      if (!props.uploadingFile) {
        const actionPayload = {
          fileInput: file,
          actionCreatorOnSuccess: props.uploadUserAvatarImage,
        }
        props.uploadFile(actionPayload)
      }
    }),
  }),
  withProps({
    title: 'Edit user profile',
  }),
  reduxForm({
    form: 'profile',
  }),
)
