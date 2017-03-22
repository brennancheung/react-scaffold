const initialState = {
  contacts: []
}

export default function reducer (state=initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'LOAD_CONTACTS':
      console.log('Loading contacts...')
      return {
        ...state,
        contacts: [
          { id: 1, name: 'Brennan' },
          { id: 2, name: 'John' }
        ]
      }

    case 'SET_CONTACTS': {
      return {
        ...state,
        contacts: payload.contacts
      }
    }

    case 'CREATE_CONTACT': {
      // TODO
      return {
        ...state
      }
    }

    case 'DELETE_CONTACT': {
      const { id } = payload
      // TODO
      return {
        ...state
      }
    }

    case 'UPDATE_CONTACT': {
      const { id } = payload
      // TODO
      return {
        ...state
      }
    }

    default:
      return state
  }
}
