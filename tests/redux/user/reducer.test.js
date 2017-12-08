import { actions as allActions, reducers as allReducers } from '../../../redux'
import Chance from 'chance'
import { range, mergeDeepRight, clone } from 'ramda'

const chance = new Chance()

const reducer = allReducers.user
const actions = allActions.user

const initialState = {
  currentUser: {
    email: null,
    customData: null,
    temporaryAvatarImageUrl: null,
  },
  allUsers: null,
  error: null,
}

const makeNewUser = () => ({
  email: chance.email(),
  customData: {
    profileImageUrl: 'https://s3-aws-eu.com/bucket/id',
    firstName: chance.first(),
    lastName: chance.second(),
  },
})

describe('User reducer', () => {
  let users
  let currentUser
  const currentUserEmail = 'current@example.com'

  beforeEach(() => {
    users = []
    range(1, 20).forEach(() => {
      users.push(makeNewUser())
    })

    currentUser = {
      ...makeNewUser(),
      email: currentUserEmail,
    }
    users.push(currentUser)
  })


  test('defines initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  test('getUserDataSuccess action', () => {
    const newState = reducer(undefined, actions.getUserDataSuccess({
      currentUser,
      users,
      path: '/home',
    }))

    expect(newState).toEqual(mergeDeepRight(initialState, {
      currentUser: {
        ...currentUser,
        temporaryAvatarImageUrl: null,
      },
      allUsers: users,
      error: null,
    }))
  })

  test('update action', () => {
    const updatedUser = clone(currentUser)
    updatedUser.customData.firstName = 'Updated first'
    updatedUser.customData.lastName = 'Updated last'
    updatedUser.temporaryAvatarImageUrl = null

    const updates = {
      firstName: 'Updated first',
      lastName: 'Updated last',
    }

    const reducerState = mergeDeepRight(initialState, {
      currentUser,
    })

    const newState = reducer(reducerState, actions.updateUserDataSuccess(updates))

    expect(newState.currentUser).toEqual(updatedUser)
  })

  test('updateUserAvatarImage action', () => {
    const updatedUser = clone(currentUser)
    const temporaryAvatarImageUrl = 'https://s3-aws-eu.com/temporary/id'
    updatedUser.temporaryAvatarImageUrl = temporaryAvatarImageUrl

    const reducerState = mergeDeepRight(initialState, {
      currentUser,
    })

    const newState = reducer(reducerState, actions.updateUserAvatarImage(temporaryAvatarImageUrl))

    expect(newState.currentUser).toEqual(updatedUser)
  })
})
