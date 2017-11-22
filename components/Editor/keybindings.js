import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js'
const { hasCommandModifier } = KeyBindingUtil

export const myKeyBindingFn = e => {
  const ENTER_KEY_CODE = 13
  if (e.keyCode === ENTER_KEY_CODE /* `S` key */ && hasCommandModifier(e)) {
    return 'editor-newline'
  } else if (e.keyCode === ENTER_KEY_CODE) {
    return 'post-message'
  }
  return getDefaultKeyBinding(e);
}


export const handleKeyCommand = (command, { insertNewLine, postMessage }) => {
  if (command === 'editor-newline') {
    insertNewLine()
  } else if (command === 'post-message') {
    postMessage()
  }

  return 'not-handled'
}
