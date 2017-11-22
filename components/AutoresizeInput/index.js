import { } from 'recompose'

const getInputStyle = (value, letterWidth) => ({
  width: `${value.length * letterWidth}px`,
  minWidth: '165px',
})

const AutoresizeInput = ({ value, letterWidth, getRef, ...rest}) => {
  return <input
    style={getInputStyle(value, letterWidth)}
    value={value}
    ref={input => getRef(input)}
    {...rest}
  />
}

export default AutoresizeInput
