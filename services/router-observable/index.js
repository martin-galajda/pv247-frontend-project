import Router from 'next/router'
import { Observable } from 'rxjs'

export const routeChangeStart$ = Observable.create(obs => {
  Router.onRouteChangeStart = url => {
    obs.next(url)
  }
}).share()

export const routeChange$ = Observable.create(obs => {
  Router.onBeforeHistoryChange = url => {
    obs.next(url)
  }
}).share()

export const routeChangeComplete$ = Observable.create(obs => {
  Router.onRouteChangeComplete = (url) => {
    obs.next(url)
  }
}).share()

export const routeChangeError$ = Observable.create(obs => {
  Router.onRouteChangeError = () => {
    obs.next()
  }
}).share()
