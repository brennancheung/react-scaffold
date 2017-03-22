import axios from 'axios'

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get('/contacts')
    const data = response.data

    dispatch({
      type: 'SET_CONTACTS',
      payload: { contacts: data.contacts }
    })
  } catch (err) {
    console.log(err)
  }
}
