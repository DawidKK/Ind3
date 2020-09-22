import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const MainPage = lazy(() => import('../pages/MainPage'))
const D3 = lazy(() => import('../pages/D3'))
const CrudPage = lazy(() => import('../pages/CrudPage'))

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route component={MainPage} exact path="/" />
          <Route component={CrudPage} exact path="/Crud" />
          <Route component={D3} exact path="/d3" />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes
