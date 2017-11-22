import { connect } from 'react-redux'
import { actions } from '../redux'
import { reduxForm } from 'redux-form'
import { withHandlers, compose, withProps } from 'recompose'

export default compose(
    connect(store => ({
      initialValues: {
        email: store.user.email,
        firstName: store.user.customData ? store.user.customData.firstName : '',
        lastName: store.user.customData ? store.user.customData.lastName : '',
      },
      uploadingFile: store.fileUpload.isUploading,
      user: store.user,
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
    })
)