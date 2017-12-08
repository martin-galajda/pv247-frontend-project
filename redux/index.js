import { combineEpics } from 'redux-observable'

import auth from './auth'
import user from './user'
import fileUpload from './file-upload'
import channels from './channels'
import modal from './modal'
import editor from './editor'
import channelMessages from './channel-messages'
import router from './router'

export const rootEpic = combineEpics(
  ...auth.epics,
  ...user.epics,
  ...fileUpload.epics,
  ...channels.epics,
  ...modal.epics,
  ...channelMessages.epics,
  ...router.epics,
)

export const reducers = {
  auth: auth.reducer,
  user: user.reducer,
  fileUpload: fileUpload.reducer,
  channels: channels.reducer,
  modal: modal.reducer,
  editor: editor.reducer,
  channelMessages: channelMessages.reducer,
}

export const actions = {
  auth: auth.actions,
  user: user.actions,
  fileUpload: fileUpload.actions,
  channels: channels.actions,
  modal: modal.actions,
  editor: editor.actions,
  channelMessages: channelMessages.actions,
  router: router.actions,
}

export const actionTypes = {
  auth: auth.actionTypes,
  user: user.actionTypes,
  fileUpload: fileUpload.actionTypes,
  channels: channels.actionTypes,
  modal: modal.actionTypes,
  editor: editor.actionTypes,
  channelMessages: channelMessages.actionTypes,
  router: router.actionTypes,
}
