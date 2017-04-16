// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './components/App.jsx'

// ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'

// import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import './css/app.styl'

import App from './components/App.jsx'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    setTimeout(() => {
      const NewApp = require('./components/App.jsx').default
      render(NewApp)
    }, 1)
  })
}
