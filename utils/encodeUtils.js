

const LEFT_BRACKET_SUBSTITUTION = 'LL___LL'
const RIGHT_BRACKET_SUBSTITUTION = 'RR___RR'

/**
 * Fetch interprets JSON stringified object not as string but as object so we need to encode that string in different format
 * in order to make API happy.
 */

export const encodeJSONAsStr = json => JSON.stringify(json)
  .replace(/{/g, LEFT_BRACKET_SUBSTITUTION)
  .replace(/}/g, RIGHT_BRACKET_SUBSTITUTION)

export const decodeStrAsJSON = str => 
    JSON.parse(str
      .replace(new RegExp(LEFT_BRACKET_SUBSTITUTION, 'g'), '{')
      .replace(new RegExp(RIGHT_BRACKET_SUBSTITUTION, 'g'), '}'))
