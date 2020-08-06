import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import CrudPage from '../pages/CrudPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={CrudPage} exact path="/Crud" />
      </Switch>
    </Router>
  )
}

export default Routes
