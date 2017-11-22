import { ROUTE_CHANGED } from './action-types'

export const routeChanged = asUrl => ({
  type: ROUTE_CHANGED,
  payload: {
    asUrl,
  },
})