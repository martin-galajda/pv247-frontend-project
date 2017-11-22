import propTypes from 'prop-types'
import { Field } from 'redux-form'
import { branch, renderNothing, withState } from 'recompose'
import { Form, FormInput, FormInputLabel, Title, ReactTokenInputLabel, ButtonsContainer } from './styled'
import ReactTokenInput from '../ReactTokenInput'
import PositiveButton from '../Buttons/Positive'

const AddChannelForm = ({ onSave, submitting, onAddInvitee, onRemoveInvitee, invitees }) => (
  <Form>
    <Title>Add new channel</Title>
    <FormInput>
      <FormInputLabel>Channel name</FormInputLabel>
      <Field
        name="name"
        component="input"
        type="text"
        autoFocus
      />
    </FormInput>

    <ReactTokenInputLabel>Invite people to join channel</ReactTokenInputLabel>
    <ReactTokenInput
      onRemove={onRemoveInvitee}
      selected={invitees}
      onAdd={onAddInvitee}
    />
    <ButtonsContainer>
      <PositiveButton onClick={onSave} type="button" width={"50%"}>Add</PositiveButton>
    </ButtonsContainer>
  </Form>
)

AddChannelForm.propTypes = {
  onSave: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  submitting: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
}

export default AddChannelForm
