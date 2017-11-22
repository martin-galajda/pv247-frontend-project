import { actionTypes as ALL_ACTION_TYPES } from '../'
import { routeChangeStart$ } from '../../services/router-observable'
import { routeChanged } from './actions'
import { Observable } from 'rxjs'

let subs 

const routeChangeEpic = action$ => action$
  .ofType(ALL_ACTION_TYPES.user.GET_USER_DATA_SUCCESS)
  .switchMap(action => {
    return routeChangeStart$
      .switchMap(asUrl => {
        return Observable.of(routeChanged(asUrl))
      })
  })

const epics = [
  routeChangeEpic,
]

export default epics