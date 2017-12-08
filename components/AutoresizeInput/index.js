import PropTypes from 'prop-types'

const getInputStyle = (value, letterWidth) => ({
  width: `${value.length * letterWidth}px`,
  minWidth: '165px',
})

const AutoresizeInput = ({ value, letterWidth, getRef, ...rest }) => (<input
  style={getInputStyle(value, letterWidth)}
  value={value}
  ref={input => getRef(input)}
  {...rest}
/>)

AutoresizeInput.propTypes = {
  value: PropTypes.string.isRequired,
  letterWidth: PropTypes.number,
  getRef: PropTypes.func.isRequired,
}

AutoresizeInput.defaultProps = {
  letterWidth: 14,
}

export default AutoresizeInput
