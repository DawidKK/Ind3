import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import CrudPage from '../pages/CrudPage'
import D3 from '../pages/D3'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={CrudPage} exact path="/Crud" />
        <Route component={D3} exact path="/d3" />
      </Switch>
    </Router>
  )
}

export default Routes
