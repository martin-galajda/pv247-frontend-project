import * as ACTION_TYPES from './action-types'

export const openModal = modalType => ({
  type: ACTION_TYPES.OPEN_MODAL,
  payload: modalType,
})

export const closeModal = modalType => ({
  type: ACTION_TYPES.CLOSE_MODAL,
  payload: modalType,
})