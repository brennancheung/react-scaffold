import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import contactsReducer from './components/contacts/reducer'

const initialState = {}

const combinedReducers = combineReducers({
  contacts: contactsReducer,
  form: formReducer
})

function rootReducer (state=initialState, action) {
  // Do any custom reducing that won't fit neatly
  // in a sub-reducer.
  return combinedReducers(state, action)
}

export default rootReducer
