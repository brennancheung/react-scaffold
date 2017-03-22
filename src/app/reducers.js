import { combineReducers } from 'redux'

import contactsReducer from './components/contacts/reducer'

const initialState = {}

const combinedReducers = combineReducers({
  contacts: contactsReducer
})

function rootReducer (state, action) {
  // Do any custom reducing that won't fit neatly
  // in a sub-reducer.
  return combinedReducers(state, action)
}

export default rootReducer
