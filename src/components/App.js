import React from 'react'
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'


function App() {
  <CssBaseline />
  return (
    <>
        <Container maxWidth="sm" style={{ marginTop: '4em', textAlign:'center'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard}/>
                <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
                <Route path="/forgot-password" component={ForgotPassword}/>
              </Switch>
            </AuthProvider>
          </Router>
        </Container>
    </>
  )
}

export default App;
