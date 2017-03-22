import React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

// const ShowProps = (props) => <pre>{JSON.stringify(props, null, 4)}</pre>

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const contacts = [
  {id: 1, name: 'Brennan'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Alex'}
]

const ListContacts = () => {
  return (
    <div className="contacts-list">
      <h1>Contacts</h1>
      <ul className="contacts-list">
        {contacts.map(contact =>
          <li key={contact.id}><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></li>)}
      </ul>
    </div>
  )
}

const EditContact = ({ match }) => {
  const id = +match.params.id
  const contact = contacts.find(x => x.id === id)
  return (
    <pre>{JSON.stringify(contact, null, 4)}</pre>
  )
}

const ActiveNavLink = (props) => (
  <NavLink activeClassName="active" {...props}>{props.children}</NavLink>
)

const NavMenu = () => (
  <nav>
    <ActiveNavLink exact to="/">Home</ActiveNavLink>
    <ActiveNavLink to="/about">About</ActiveNavLink>
    <ActiveNavLink exact to="/contacts">Contacts</ActiveNavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/contacts" component={ListContacts} />
        <Route path="/contacts/:id" component={EditContact} />
        <Redirect to="/about" />
      </Switch>
    </div>
  </Router>
)

export default App

/* Example router usage / scratchpad:


<Route exact path="/" component={Home} />

<Route path="/about" component={About} />

<Route path="/rendered" render={() => <h1>Rendered directly</h1>} />

<Route
  path="/about"
  children={({match}) => match && <h1>About</h1>} />

*/
