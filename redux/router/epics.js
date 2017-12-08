import { routeChangeStart$, routeChangeComplete$ } from '../../services/router-observable'
import * as ACTION_TYPES from './action-types'
import { routeChangeStart, routeChangeFinish } from './actions'
import { Observable } from 'rxjs'
import Router from 'next/router'

const routeChangeStartEpic = action$ => action$
  .ofType(ACTION_TYPES.INIT)
  .switchMap(() => {
    return Observable.of(Router.asPath).concat(routeChangeStart$)
  })
  .switchMap(url => Observable.of(routeChangeStart(url)))

const routeChangeFinishEpic = action$ => action$
  .ofType(ACTION_TYPES.INIT)
  .switchMap(() => routeChangeComplete$)
  .switchMap(url => Observable.of(routeChangeFinish(url)))

const epics = [
  routeChangeStartEpic,
  routeChangeFinishEpic,
]

export default epics
