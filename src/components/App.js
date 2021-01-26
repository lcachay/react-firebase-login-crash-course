import React from 'react'
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
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
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/>
              </Switch>
            </AuthProvider>
          </Router>
        </Container>
    </>
  )
}

export default App;
