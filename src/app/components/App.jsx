import React from 'react'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  // Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'

import ListContacts from './contacts/ListContacts.jsx'

// import { Menu } from 'semantic-ui-react'

// const ShowProps = (props) => <pre>{JSON.stringify(props, null, 4)}</pre>

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>

const ActiveNavLink = (props) => (
  <NavLink activeClassName="active" {...props}>{props.children}</NavLink>
)

const NavMenu = () => (
  <nav className="ui menu">
    <ActiveNavLink className="item" exact to="/">Home</ActiveNavLink>
    <ActiveNavLink className="item" to="/about">About</ActiveNavLink>
    <ActiveNavLink className="item" exact to="/contacts">Contacts</ActiveNavLink>
  </nav>
)

const EditContact = () => (<h1>Edit Contact</h1>)

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
