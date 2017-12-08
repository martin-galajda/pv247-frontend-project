import * as ACTION_TYPES from './action-types'

export const openModal = ({ modalType, modalData = {} }) => ({
  type: ACTION_TYPES.OPEN_MODAL,
  payload: {
    modalType,
    modalData,
  },
})

export const closeModal = payload => ({
  type: ACTION_TYPES.CLOSE_MODAL,
  payload,
})
