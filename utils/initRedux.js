import './polyfills'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, reducers, actions } from '../redux'
import { reducer as formReducer } from 'redux-form'

let reduxStore = null
const epicMiddleware = createEpicMiddleware(rootEpic)

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = arg => arg

/* eslint-disable no-underscore-dangle,no-undef */
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}
/* eslint-enable no-underscore-dangle,no-undef */

function create(initialState = {}) {
  return createStore(
    // Setup reducers
    combineReducers({
      ...reducers,
      form: formReducer,
    }),

    // Hydrate the store with server-side data
    initialState,

    compose(
      // Add additional middleware here
      applyMiddleware(epicMiddleware),
      devtools,
    ),
  )
}

export default function initRedux(initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections

  // eslint-disable-next-line
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(initialState)
  }

  reduxStore.dispatch(actions.router.routerInit())

  return reduxStore
}
