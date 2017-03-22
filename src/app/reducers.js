import { combineReducers } from 'redux'

const initialState = {}

function exampleReducer (state=initialState, action) {
  const { payload } = action

  switch (action.type) {
    case 'NOOP':
      return state

    default:
      return state
  }
}

const combinedReducers = combineReducers({
  exampleReducer
})

function rootReducer (state, action) {
  // Do any custom reducing that won't fit neatly
  // in a sub-reducer.
  return combinedReducers(state, action)
}

export default rootReducer
