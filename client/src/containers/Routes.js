import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from '../pages/Main'
import PageTwo from '../pages/PageTwo'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Main} exact path="/" />
        <Route component={PageTwo} exact path="/page-two" />
      </Switch>
    </Router>
  )
}

export default Routes
