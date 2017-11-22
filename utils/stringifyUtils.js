const UNIQUE_FIELD_SEPARATOR = ';;;_LEVEL_;;;'

const UNIQUE_EQUAL_SIGN = '===_LEVEL_==='


const makeFieldSeparator = level => UNIQUE_FIELD_SEPARATOR.replace('LEVEL', level)
const makeEqualSign = level => UNIQUE_EQUAL_SIGN.replace('LEVEL', level)

export const stringifyValue = (inputValue, level = 0) => {
  if (typeof inputValue === 'string') {
    return inputValue
  }

  let stringifiedCustomData = ''
  const equalSign = makeEqualSign(level)
  const fieldSeparator = makeFieldSeparator(level)
  Object.entries(inputValue)
    .forEach(([key, value], idx) => {
      if (idx !== 0) {
        stringifiedCustomData += fieldSeparator
      }

      stringifiedCustomData += `${key}${equalSign}${stringifyValue(value, level + 1)}`
    })

  return stringifiedCustomData
}

export const destringifyValue = (inputValue, level = 0) => {
  if (typeof inputValue !== 'string') {
    console.log('inputValue was not string')
    console.log(inputValue)

    return inputValue
  }

  let customData = {}

  const fieldSeparator = makeFieldSeparator(level)  
  const equalSign = makeEqualSign(level)
  const fields = inputValue.split(fieldSeparator)

  fields.forEach(field => {
    console.log('splitting field', field)
    console.log('fields length', fields.length)

    console.log('going to call split on: ', field)
    const [key, value] = field.split(equalSign)

    if (!value && fields.length === 1) {
      customData = key
    } else {
      console.log('going to destringify', value)
      customData[key] = destringifyValue(value, level + 1)      
    }
  })

  console.log('returning', customData)
  return customData
}