import { ROUTE_CHANGE_START, ROUTE_CHANGE_FINISH, INIT } from './action-types'

export const routeChangeStart = url => ({
  type: ROUTE_CHANGE_START,
  payload: {
    url,
  },
})

export const routeChangeFinish = url => ({
  type: ROUTE_CHANGE_FINISH,
  payload: {
    url,
  },
})

export const routerInit = () => ({
  type: INIT,
})
