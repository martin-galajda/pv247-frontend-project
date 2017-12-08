import propTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, FormInput, FormInputLabel, Title, ReactTokenInputLabel, ButtonsContainer } from './styled'
import ReactTokenInput from '../ReactTokenInput'
import PositiveButton from '../Buttons/Positive'

const AddChannelForm = ({ title, onSave, onAddInvitee, onRemoveInvitee, invitees, users }) => (
  <Form>
    <Title>{title}</Title>
    <FormInput>
      <FormInputLabel>Channel name</FormInputLabel>
      <Field
        name="name"
        component="input"
        type="text"
      />
    </FormInput>

    <ReactTokenInputLabel>Invite people to join channel</ReactTokenInputLabel>
    <ReactTokenInput
      onRemove={onRemoveInvitee}
      selected={invitees}
      onAdd={onAddInvitee}
      availableItems={users}
    />
    <ButtonsContainer>
      <PositiveButton onClick={onSave} type="button" width={'50%'}>Save</PositiveButton>
    </ButtonsContainer>
  </Form>
)

AddChannelForm.propTypes = {
  onSave: propTypes.func.isRequired,
  onAddInvitee: propTypes.func.isRequired,
  onRemoveInvitee: propTypes.func.isRequired,
  invitees: propTypes.array.isRequired,
  users: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
}

export default AddChannelForm
