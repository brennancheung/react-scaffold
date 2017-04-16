import { combineReducers } from 'redux'

// import contactsReducer from './components/contacts/reducer'

const initialState = {}

const exampleReducer = (state=initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_FOO':
      return {
        ...state,
        foo: payload
      }

    default:
      return state
  }
}

const combinedReducers = combineReducers({
  example: exampleReducer
})

function rootReducer (state=initialState, action) {
  // Do any custom reducing that won't fit neatly
  // in a sub-reducer.
  return combinedReducers(state, action)
}

export default rootReducer
