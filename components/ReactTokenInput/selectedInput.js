
import { IconWrapper, SelectedInputAreaItem } from './styled'
import CloseIcon from 'react-icons/lib/fa/close'
import PropTypes from 'prop-types'

const SelectedInput = ({ onDeselect, value }) => (
  <SelectedInputAreaItem>
    <IconWrapper onClick={() => onDeselect(value)} >
      <CloseIcon />
    </IconWrapper>
    {value}
  </SelectedInputAreaItem>
)

SelectedInput.propTypes = {
  onDeselect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default SelectedInput
