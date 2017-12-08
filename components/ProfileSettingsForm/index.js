import { Form, FormInput, Title, FormInputLabel, DropzoneHeader } from './styled'
import propTypes from 'prop-types'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone'
import { branch, renderNothing } from 'recompose'
import withSpinner from '../../enhancers/withSpinner'

const getAdditionalDropzoneProps = user => {
  if (user.temporaryAvatarImageUrl || (user.customData && user.customData.profileImageUrl)) {
    return {
      style: {
        backgroundImage: `url("${user.temporaryAvatarImageUrl || user.customData.profileImageUrl}"`,
        border: 'none',
      },
    }
  }
  return {}
}

const DropzoneContent = () =>
  <h1>Upload profile picture</h1>


const hideIfHasImage = branch(
  props => props.user.temporaryAvatarImageUrl || (props.user.customData && props.user.customData.profileImageUrl),
  renderNothing,
)
const HideableDropzoneContent = hideIfHasImage(DropzoneContent)

const LoadableDropzone = withSpinner(Dropzone)

const ProfileSettingsForm = ({ title, handleSubmit, onDrop, uploadingFile, user }) => (
  <Form onSubmit={handleSubmit}>
    <Title>{title}</Title>

    <DropzoneHeader>Profile Picture</DropzoneHeader>
    <LoadableDropzone
      isLoading={uploadingFile}
      spinnerStyles={{ containerHeight: '240px', iconContainerHeight: '240px' }}
      className="dropzone"
      onDrop={onDrop}
      disabled={uploadingFile}
      {...getAdditionalDropzoneProps(user)}
    >
      <HideableDropzoneContent user={user} />
    </LoadableDropzone>

    <FormInput>
      <FormInputLabel>Email</FormInputLabel>
      <Field
        name="email"
        component="input"
        type="email"
        placeholder="Email"
        readOnly
      />
    </FormInput>
    <FormInput>
      <FormInputLabel>First name</FormInputLabel>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First name..."
      />
    </FormInput>
    <FormInput>
      <FormInputLabel>Last name</FormInputLabel>
      <Field
        name="lastName"
        component="input"
        type="text"
        placeholder="Last name..."
      />
    </FormInput>
  </Form>
)

ProfileSettingsForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
  uploadingFile: propTypes.bool.isRequired,
  onDrop: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
}

export default ProfileSettingsForm
