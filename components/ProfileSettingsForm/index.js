import { Form, FormInput, Title, FormInputLabel, DropzoneHeader } from './styled'
import propTypes from 'prop-types'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone'
import { branch, renderNothing } from 'recompose'

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

const DropzoneContent = () => (
  <h1>Upload profile picture</h1>  
)

const hideIfHasImage = branch(
  props => props.user.temporaryAvatarImageUrl || (props.user.customData && props.user.customData.profileImageUrl),
  renderNothing
)
const HideableDropzoneContent = hideIfHasImage(DropzoneContent)

const ProfileSettingsForm = ({ title, handleSubmit, pristine, submitting, onDrop, uploadingFile, user }) => (
  <Form onSubmit={handleSubmit}>
    <Title>{title}</Title>

    <DropzoneHeader>Profile Picture</DropzoneHeader>
    <Dropzone className="dropzone" onDrop={onDrop} disabled={uploadingFile} {...getAdditionalDropzoneProps(user)}>
      <HideableDropzoneContent user={user} />
    </Dropzone>

    <FormInput>
      <FormInputLabel>Email</FormInputLabel>
      <Field
        name="email"
        component="input"
        type="email"
        placeholder="Email"
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
  pristine: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
}

export default ProfileSettingsForm
