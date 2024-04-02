import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Page from './views/page'
import Homepage from './views/homepage'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Page} path="**" />
        <Route component={Homepage} exact path="/" />
        <Route component={About} exact path="/about" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
