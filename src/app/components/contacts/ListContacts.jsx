import React from 'react'
import { connect } from 'react-redux'

import { Item } from 'semantic-ui-react'

import { fetchContacts } from './actions'

function mapStateToProps (state) {
  return {
    contacts: (state.contacts && state.contacts.contacts) || []
  }
}

@connect(mapStateToProps)
class ListContacts extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchContacts())
  }

  render () {
    console.log(this.props.contacts)
    return (
      <ContactList contacts={this.props.contacts} />
    )
  }
}

const ContactList = ({ contacts }) => (
  <div className="contacts-list">
    <h1>Contacts</h1>
    <Item.Group>
      {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </Item.Group>
  </div>
)

const Contact = ({ contact }) => (
  <Item>
    <pre>{JSON.stringify(contact, null, 4)}</pre>
  </Item>
)

export default ListContacts
