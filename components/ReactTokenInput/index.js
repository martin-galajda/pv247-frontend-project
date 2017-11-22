
import { Container, InputArea, InputAreaItem, IconWrapper, SelectedInputAreaItem } from './styled'
import CloseIcon from 'react-icons/lib/fa/close'
import PropTypes from 'prop-types'
import { withState } from 'recompose'
import AutoresizeInput from '../AutoresizeInput'

const withTokenInputState = withState('inputValue', 'onChangeInput', '')

const SelectedInput = ({ onDeselect, value }) => (
  <SelectedInputAreaItem>
    <IconWrapper onClick={() => onDeselect(value)} >
      <CloseIcon />
    </IconWrapper>
    {value}
  </SelectedInputAreaItem>
)

const invokeOnEnterPressed = callbacks => e => {
  const ENTER_KEY_CODE = 13
  if (e.keyCode === ENTER_KEY_CODE) {
    callbacks.forEach(callback => callback(e.target.value))
  }
}

const ReactTokenInput = ({ selected, onRemove, onAdd, onChangeInput, inputValue }) => {
  let inputRef

  const focusInputRef = () => {
    if (inputRef.focus) {
      inputRef.focus()
    }
  }

  return (
    <Container onClick={focusInputRef}>
      <InputArea>
        {selected.map((selectedValue, idx) => <SelectedInput 
          key={`${selectedValue}-${idx}`} 
          value={selectedValue}
          onDeselect={onRemove}
        />)}
        <InputAreaItem>
          <AutoresizeInput
            onChange={e => {
              const value = e.target.value
              onChangeInput(() => value)
            }}
            getRef={input => inputRef = input}
            onBlur={() => {
              if (inputValue) {
                onAdd(inputValue)
                onChangeInput(() => '')
              }
            }}
            placeholder="Enter user email"
            value={inputValue}
            letterWidth={12.5}
            onKeyDown={invokeOnEnterPressed([ onAdd, function clearInput() {
              onChangeInput(() => '')
            }])}
          />
        </InputAreaItem>
      </InputArea>
    </Container>
  )
}

ReactTokenInput.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
}

export default withTokenInputState(ReactTokenInput)

