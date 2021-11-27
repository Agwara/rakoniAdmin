import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage"
import Login from "../pages/Login/Login"
import ResetPasswordPage from "../pages/ResetPasswordPage/ResetPasswordPage"
import CreateAccount from "../pages/CreatAccount/CreateAccount"
import Student from "../pages/Student/Student"


import Dashboard from "../pages/Dashboard/Dashboard"
import PageNotFound from "../pages/PageNotFound/PageNotFound"

import PrivateRoute from "./PrivateRoute"

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />

        <PrivateRoute exact path="/create-account" component={CreateAccount} />

        <Route exact path="/forgot-password" component={ForgotPasswordPage} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/reset-password/:token" component={ResetPasswordPage} />

        <PrivateRoute path={`/student`} component={Student} />

        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default AppRouter